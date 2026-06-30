import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const sectionsRoot = path.join(repoRoot, "src", "sections");

const categories = [
  { name: "banner", expectedCount: 16 },
  { name: "header", expectedCount: 27, rootTags: ["header", "section"] },
  { name: "stats", expectedCount: 60 },
  { name: "logo", expectedCount: 6 },
  { name: "faq", expectedCount: 14 },
];

const errors = [];
const summary = [];

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function isSectionDir(entry) {
  return entry.isDirectory() && /^\d+$/.test(entry.name);
}

function variantFromManifest(manifest, folderName) {
  const idMatch = typeof manifest.id === "string" ? manifest.id.match(/-(\d+)$/) : null;
  if (idMatch) return idMatch[1];
  if (typeof manifest.variant === "string") {
    const variantMatch = manifest.variant.match(/(\d+)/);
    if (variantMatch) return variantMatch[1];
  }
  return String(Number(folderName));
}

function checkCategory(category) {
  const categoryDir = path.join(sectionsRoot, category.name);
  if (!fs.existsSync(categoryDir)) {
    errors.push(`${category.name}: missing category directory`);
    return;
  }

  const sectionDirs = fs
    .readdirSync(categoryDir, { withFileTypes: true })
    .filter(isSectionDir)
    .map((entry) => entry.name)
    .sort((a, b) => Number(a) - Number(b));

  if (sectionDirs.length !== category.expectedCount) {
    errors.push(`${category.name}: expected ${category.expectedCount} section directories, found ${sectionDirs.length}`);
  }

  for (const folderName of sectionDirs) {
    const sectionDir = path.join(categoryDir, folderName);
    const label = `${category.name}/${folderName}`;
    const htmlPath = path.join(sectionDir, "section.html");
    const cssPath = path.join(sectionDir, "section.css");
    const manifestPath = path.join(sectionDir, "manifest.json");

    for (const filePath of [htmlPath, cssPath, manifestPath]) {
      if (!fs.existsSync(filePath)) {
        errors.push(`${label}: missing ${path.basename(filePath)}`);
      }
    }

    if (!fs.existsSync(htmlPath) || !fs.existsSync(manifestPath)) {
      continue;
    }

    let manifest;
    try {
      manifest = JSON.parse(readText(manifestPath));
    } catch (error) {
      errors.push(`${label}: manifest.json does not parse as JSON (${error.message})`);
      continue;
    }

    if (manifest.category !== category.name) {
      errors.push(`${label}: manifest category is ${JSON.stringify(manifest.category)}, expected ${JSON.stringify(category.name)}`);
    }

    if (manifest.status !== "draft") {
      errors.push(`${label}: manifest status is ${JSON.stringify(manifest.status)}, expected "draft"`);
    }

    const variant = variantFromManifest(manifest, folderName);
    const expectedId = `${category.name}-${Number(variant)}`;
    if (manifest.id !== expectedId) {
      errors.push(`${label}: manifest id is ${JSON.stringify(manifest.id)}, expected ${JSON.stringify(expectedId)}`);
    }

    const html = readText(htmlPath);
    if (!/<link\b[^>]*href=["']\.\/section\.css["'][^>]*>/i.test(html)) {
      errors.push(`${label}: section.html does not link ./section.css`);
    }

    const rootTags = category.rootTags ?? ["section"];
    const exactRootPattern = new RegExp(`<(${rootTags.join("|")})\\b[^>]*id=["']${expectedId}["']`, "i");
    const familyRootPattern = new RegExp(`<(${rootTags.join("|")})\\b[^>]*id=["']${category.name}-\\d+["']`, "i");
    if (!exactRootPattern.test(html) && !familyRootPattern.test(html)) {
      errors.push(`${label}: missing semantic root (${rootTags.join(" or ")}) with ${category.name}-* id`);
    }
  }

  summary.push(`${category.name}: ${sectionDirs.length}`);
}

for (const category of categories) {
  checkCategory(category);
}

if (errors.length > 0) {
  console.error("Category file validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Category files OK (${summary.join(", ")}; total ${summary.reduce((sum, item) => sum + Number(item.split(": ")[1]), 0)} sections).`);
