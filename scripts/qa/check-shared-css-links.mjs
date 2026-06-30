import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const sectionsRoot = path.join(repoRoot, "src", "sections");

const linkedSharedCategories = ["header", "stats", "logo", "faq"];
const allCategories = ["banner", ...linkedSharedCategories, "footer"];
const errors = [];

function listSectionFolders(category) {
  return fs
    .readdirSync(path.join(sectionsRoot, category), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d+$/.test(entry.name))
    .map((entry) => entry.name)
    .sort((a, b) => Number(a) - Number(b));
}

function linkIndex(html, href) {
  return html.indexOf(`href="${href}"`);
}

for (const category of linkedSharedCategories) {
  const sharedHref = `../${category}.shared.css`;
  const sharedPath = path.join(sectionsRoot, category, `${category}.shared.css`);
  if (!fs.existsSync(sharedPath)) {
    errors.push(`${category}: missing ${category}.shared.css`);
    continue;
  }

  for (const folder of listSectionFolders(category)) {
    const label = `${category}/${folder}`;
    const htmlPath = path.join(sectionsRoot, category, folder, "section.html");
    const html = fs.readFileSync(htmlPath, "utf8");
    const primitivesIndex = linkIndex(html, "../../../primitives.css");
    const sharedIndex = linkIndex(html, sharedHref);
    const sectionIndex = linkIndex(html, "./section.css");

    if (sharedIndex === -1) {
      errors.push(`${label}: missing ${sharedHref}`);
    }
    if (primitivesIndex === -1) {
      errors.push(`${label}: missing ../../../primitives.css`);
    }
    if (sectionIndex === -1) {
      errors.push(`${label}: missing ./section.css`);
    }
    if (primitivesIndex !== -1 && sharedIndex !== -1 && primitivesIndex > sharedIndex) {
      errors.push(`${label}: shared CSS link appears before primitives.css`);
    }
    if (sharedIndex !== -1 && sectionIndex !== -1 && sharedIndex > sectionIndex) {
      errors.push(`${label}: shared CSS link appears after section.css`);
    }
  }
}

const bannerSharedPath = path.join(sectionsRoot, "banner", "banner.shared.css");
if (!fs.existsSync(bannerSharedPath)) {
  errors.push("banner: missing banner.shared.css");
} else {
  for (const folder of listSectionFolders("banner")) {
    const label = `banner/${folder}`;
    const cssPath = path.join(sectionsRoot, "banner", folder, "section.css");
    const css = fs.readFileSync(cssPath, "utf8");
    const html = fs.readFileSync(path.join(sectionsRoot, "banner", folder, "section.html"), "utf8");
    const importsBannerShared = /@import\s+["']\.\.\/banner\.shared\.css["'];/.test(css);

    if (html.includes("banner.shared.css")) {
      errors.push(`${label}: links banner.shared.css from HTML, but Banner convention is CSS @import`);
    }

    if (["13", "15", "16"].includes(folder)) {
      if (importsBannerShared) {
        errors.push(`${label}: specialized ticker/marquee section unexpectedly imports banner.shared.css`);
      }
    } else if (!importsBannerShared) {
      errors.push(`${label}: missing @import "../banner.shared.css";`);
    }
  }
}

for (const category of allCategories) {
  for (const folder of listSectionFolders(category)) {
    const label = `${category}/${folder}`;
    const htmlPath = path.join(sectionsRoot, category, folder, "section.html");
    const html = fs.readFileSync(htmlPath, "utf8");
    const cssPath = path.join(sectionsRoot, category, folder, "section.css");
    const css = fs.readFileSync(cssPath, "utf8");
    const combined = `${html}\n${css}`;

    for (const otherCategory of allCategories.filter((item) => item !== category)) {
      if (combined.includes(`${otherCategory}.shared.css`)) {
        errors.push(`${label}: references another category shared CSS (${otherCategory}.shared.css)`);
      }
    }

    if (/src\/shared|shared\/|global\.shared\.css|design-system/i.test(combined)) {
      errors.push(`${label}: appears to reference a global shared/design-system layer`);
    }
  }
}

if (errors.length > 0) {
  console.error("Shared CSS link validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Shared CSS links OK (Header/Stats/Logo/FAQ HTML links; Banner CSS-import convention preserved; Footer has no shared CSS yet).");
