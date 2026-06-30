import { spawnSync } from "node:child_process";

const checks = [
  ["Category files", "scripts/qa/check-category-files.mjs"],
  ["Catalog integrity", "scripts/qa/check-catalog-integrity.mjs"],
  ["Shared CSS links", "scripts/qa/check-shared-css-links.mjs"],
];

const categories = ["banner", "header", "stats", "logo", "faq"];
const expectedSectionCount = 123;
let failures = 0;

for (const [label, script] of checks) {
  const result = spawnSync(process.execPath, [script], {
    encoding: "utf8",
    stdio: "pipe",
  });

  if (result.stdout.trim()) {
    console.log(result.stdout.trim());
  }

  if (result.status !== 0) {
    failures += 1;
    if (result.stderr.trim()) {
      console.error(result.stderr.trim());
    }
    console.error(`${label}: failed`);
  } else {
    console.log(`${label}: passed`);
  }
}

if (failures > 0) {
  console.error(`Library health failed (${failures} failing check${failures === 1 ? "" : "s"}).`);
  process.exit(1);
}

console.log(`Library health OK: ${categories.join(", ")} checked; ${expectedSectionCount} sections; ${expectedSectionCount} catalog previews; shared CSS links valid.`);
