(() => {
  if (window.__sectionReviewNavInstalled) return;
  window.__sectionReviewNavInstalled = true;

  const sectionMatch = window.location.pathname.match(/^\/src\/sections\/([^/]+)\/([^/]+)\/section\.html$/);
  if (!sectionMatch) return;

  const [, currentCategory, currentFolder] = sectionMatch;

  function folderFor(preview) {
    if (preview.folder) return preview.folder;
    return preview.number < 10 ? `0${preview.number}` : String(preview.number);
  }

  function parsePreviewValue(source, key) {
    const stringMatch = source.match(new RegExp(`${key}:\\s*"([^"]+)"`));
    if (stringMatch) return stringMatch[1];
    const numberMatch = source.match(new RegExp(`${key}:\\s*(\\d+)`));
    if (numberMatch) return Number(numberMatch[1]);
    return undefined;
  }

  async function loadPreviews() {
    const response = await fetch("/catalog/index.html", { cache: "no-store" });
    if (!response.ok) return [];

    const html = await response.text();
    const listMatch = html.match(/const previews = \[([\s\S]*?)\];/);
    if (!listMatch) return [];

    return [...listMatch[1].matchAll(/\{([^{}]+)\}/g)]
      .map((match) => ({
        category: parsePreviewValue(match[1], "category"),
        number: parsePreviewValue(match[1], "number"),
        folder: parsePreviewValue(match[1], "folder")
      }))
      .filter((preview) => preview.category && Number.isFinite(preview.number));
  }

  let previewsPromise;

  async function navigate(direction) {
    previewsPromise ??= loadPreviews();
    const previews = await previewsPromise;
    const currentIndex = previews.findIndex(
      (preview) => preview.category === currentCategory && folderFor(preview) === currentFolder
    );
    if (currentIndex === -1) return;

    const next = previews[currentIndex + direction];
    if (!next) return;

    window.location.href = `/src/sections/${next.category}/${folderFor(next)}/section.html`;
  }

  window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.target?.closest?.("input, textarea, select, button, a, [contenteditable='true']")) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      navigate(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      navigate(-1);
    }
  });
})();
