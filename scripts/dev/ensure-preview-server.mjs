import { spawn } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { openSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../..");
const tmpDir = path.join(repoRoot, ".tmp");
const pidPath = path.join(tmpDir, "preview-server.pid");
const logPath = path.join(tmpDir, "preview-server.log");
const url = "http://127.0.0.1:8765/catalog/index.html";

async function isReachable() {
  try {
    const response = await fetch(url, { cache: "no-store" });
    return response.ok;
  } catch {
    return false;
  }
}

async function removeStalePid() {
  try {
    const pid = Number((await readFile(pidPath, "utf8")).trim());
    if (Number.isInteger(pid) && pid > 0) {
      process.kill(pid, 0);
      return;
    }
  } catch {
    await rm(pidPath, { force: true });
  }
}

async function waitForServer() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    if (await isReachable()) return true;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  return false;
}

if (await isReachable()) {
  console.log("Preview server already running");
  process.exit(0);
}

await mkdir(tmpDir, { recursive: true });
await removeStalePid();

const serverCode = `
import http from "node:http";
import { createReadStream } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = ${JSON.stringify(repoRoot)};
const host = "127.0.0.1";
const port = 8765;
const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"]
]);

function send(res, status, message) {
  res.writeHead(status, { "content-type": "text/plain; charset=utf-8" });
  res.end(message);
}

async function sendHtml(res, filePath, pathname) {
  let html = await readFile(filePath, "utf8");
  if (/^\\/src\\/sections\\/[^/]+\\/[^/]+\\/section\\.html$/.test(pathname)) {
    html = html.replace(
      "</body>",
      '  <script src="/scripts/dev/review-section-nav.js" data-review-only="true"></script>\\n  </body>'
    );
  }
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(html);
}

const server = http.createServer(async (req, res) => {
  try {
    const requestedUrl = new URL(req.url || "/", "http://127.0.0.1");
    let pathname = decodeURIComponent(requestedUrl.pathname);
    if (pathname.endsWith("/")) pathname += "index.html";
    const filePath = path.resolve(root, "." + pathname);
    if (!filePath.startsWith(root + path.sep) && filePath !== root) {
      send(res, 403, "Forbidden");
      return;
    }
    const stats = await stat(filePath);
    if (!stats.isFile()) {
      send(res, 404, "Not found");
      return;
    }
    if (path.extname(filePath) === ".html") {
      await sendHtml(res, filePath, pathname);
      return;
    }
    res.writeHead(200, { "content-type": types.get(path.extname(filePath)) || "application/octet-stream" });
    createReadStream(filePath).pipe(res);
  } catch {
    send(res, 404, "Not found");
  }
});

server.listen(port, host);
`;

const logFd = openSync(logPath, "a");
const child = spawn(process.execPath, ["--input-type=module", "--eval", serverCode], {
  cwd: repoRoot,
  detached: true,
  stdio: ["ignore", logFd, logFd]
});

child.unref();
await writeFile(pidPath, String(child.pid));

if (!(await waitForServer())) {
  throw new Error("Preview server did not become reachable at http://127.0.0.1:8765/catalog/index.html");
}

console.log("Preview server started");
