import { readFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "../..");
const pidPath = path.join(repoRoot, ".tmp", "preview-server.pid");

async function clearPid() {
  await rm(pidPath, { force: true });
}

try {
  const pid = Number((await readFile(pidPath, "utf8")).trim());
  if (!Number.isInteger(pid) || pid <= 0) {
    await clearPid();
    console.log("No managed preview server running.");
    process.exit(0);
  }

  try {
    process.kill(pid, "SIGTERM");
    await clearPid();
    console.log("Managed preview server stopped.");
  } catch {
    await clearPid();
    console.log("No managed preview server running.");
  }
} catch {
  console.log("No managed preview server running.");
}
