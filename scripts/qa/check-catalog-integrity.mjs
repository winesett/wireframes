import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const catalogPath = path.join(repoRoot, "catalog", "index.html");
const sectionsRoot = path.join(repoRoot, "src", "sections");

const expectedCounts = {
  banner: 16,
  header: 27,
  stats: 60,
  logo: 6,
  faq: 14,
};

const errors = [];

function sectionKey(category, folder) {
  return `${category}/${folder}`;
}

function listBuiltSections() {
  const sections = new Set();
  for (const category of Object.keys(expectedCounts)) {
    const categoryDir = path.join(sectionsRoot, category);
    if (!fs.existsSync(categoryDir)) {
      errors.push(`${category}: missing category directory`);
      continue;
    }
    const folders = fs
      .readdirSync(categoryDir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && /^\d+$/.test(entry.name))
      .map((entry) => entry.name);
    for (const folder of folders) {
      sections.add(sectionKey(category, folder));
    }
  }
  return sections;
}

function parseCatalogPreviews(catalogHtml) {
  const previews = [];
  const objectPattern = /\{\s*category:\s*"([^"]+)",\s*label:\s*"[^"]+",\s*number:\s*(\d+),(?:\s*folder:\s*"([^"]+)",)?\s*height:\s*(\d+)\s*\}/g;
  let match;
  while ((match = objectPattern.exec(catalogHtml)) !== null) {
    const number = Number(match[2]);
    previews.push({
      category: match[1],
      number,
      folder: match[3] ?? (number < 10 ? `0${number}` : String(number)),
      height: Number(match[4]),
    });
  }
  return previews;
}

if (!fs.existsSync(catalogPath)) {
  errors.push("catalog/index.html is missing");
} else {
  const catalogHtml = fs.readFileSync(catalogPath, "utf8");
  const previews = parseCatalogPreviews(catalogHtml);
  const builtSections = listBuiltSections();
  const seen = new Map();
  const counts = Object.fromEntries(Object.keys(expectedCounts).map((category) => [category, 0]));

  for (const preview of previews) {
    if (!Object.hasOwn(expectedCounts, preview.category)) {
      errors.push(`catalog: unexpected category ${preview.category}`);
      continue;
    }

    const key = sectionKey(preview.category, preview.folder);
    const sectionHtml = path.join(sectionsRoot, preview.category, preview.folder, "section.html");
    if (!fs.existsSync(sectionHtml)) {
      errors.push(`catalog: ${key} references missing section.html`);
    }

    seen.set(key, (seen.get(key) ?? 0) + 1);
    counts[preview.category] += 1;
  }

  for (const [key, count] of seen) {
    if (count !== 1) {
      errors.push(`catalog: ${key} appears ${count} times`);
    }
  }

  for (const key of builtSections) {
    if (!seen.has(key)) {
      errors.push(`catalog: missing preview for ${key}`);
    }
  }

  for (const [category, expectedCount] of Object.entries(expectedCounts)) {
    if (counts[category] !== expectedCount) {
      errors.push(`catalog: ${category} count is ${counts[category]}, expected ${expectedCount}`);
    }
  }

  const expectedTotal = Object.values(expectedCounts).reduce((sum, count) => sum + count, 0);
  if (previews.length !== expectedTotal) {
    errors.push(`catalog: total preview count is ${previews.length}, expected ${expectedTotal}`);
  }
}

if (errors.length > 0) {
  console.error("Catalog integrity validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const total = Object.values(expectedCounts).reduce((sum, count) => sum + count, 0);
console.log(`Catalog integrity OK (${total} previews: ${Object.entries(expectedCounts).map(([category, count]) => `${category} ${count}`).join(", ")}).`);
