type SearchRecord = {
  title: string;
  type: string;
  url: string;
  excerpt: string;
};
type PagefindResult = {
  url: string;
  excerpt: string;
  meta: { title: string; type: string };
};
type Pagefind = {
  search: (
    q: string,
    options: object,
  ) => Promise<{ results: { data: () => Promise<PagefindResult> }[] }>;
  options: (options: object) => Promise<void>;
};
const base = document.documentElement.dataset.base!;
const dialog = document.querySelector<HTMLDialogElement>("#search-dialog")!;
const query = document.querySelector<HTMLInputElement>("#search-query")!;
const type = document.querySelector<HTMLSelectElement>("#search-type")!;
const status = document.querySelector<HTMLElement>("#search-status")!;
const list = document.querySelector<HTMLOListElement>("#search-results")!;
const retry = document.querySelector<HTMLButtonElement>("#search-retry")!;
const previous = document.querySelector<HTMLButtonElement>("#search-prev")!;
const next = document.querySelector<HTMLButtonElement>("#search-next")!;
const pageLabel = document.querySelector<HTMLElement>("#search-page")!;
const types = ["all", "protocol", "glossary", "rfc"];
let opener: HTMLElement | null = null,
  attempt = 0,
  engine: Promise<Pagefind> | undefined,
  identifiers: Promise<Record<string, SearchRecord[]>> | undefined,
  generation = 0,
  timer: ReturnType<typeof setTimeout>,
  page = 0,
  results: SearchRecord[] = [];
async function json<T>(path: string): Promise<T> {
  const response = await fetch(base + path);
  if (!response.ok) throw new Error("Search lookup unavailable");
  return response.json();
}
async function dependencies() {
  engine ??= import(
    /* @vite-ignore */ `${base}pagefind/pagefind.js?attempt=${attempt}`
  )
    .then(async (module) => {
      await module.options({ baseUrl: base });
      return module as Pagefind;
    })
    .catch((error) => {
      engine = undefined;
      throw error;
    });
  identifiers ??= json<Record<string, SearchRecord[]>>(
    "lookup/identifiers.json",
  ).catch((error) => {
    identifiers = undefined;
    throw error;
  });
  return Promise.all([engine, identifiers]);
}
function plainSnippet(html: string) {
  const parsed = new DOMParser().parseFromString(html, "text/html");
  return parsed.body.textContent || "";
}
function state() {
  const address = new URL(location.href);
  address.searchParams.set("q", query.value);
  if (type.value === "all") address.searchParams.delete("type");
  else address.searchParams.set("type", type.value);
  history.replaceState(null, "", address);
}
function render() {
  list.replaceChildren();
  const slice = results.slice(page * 10, page * 10 + 10);
  for (const result of slice) {
    const item = document.createElement("li"),
      heading = document.createElement("h3"),
      link = document.createElement("a"),
      kind = document.createElement("span"),
      excerpt = document.createElement("p");
    link.href = result.url;
    link.textContent = result.title;
    kind.className = "result-type";
    kind.textContent =
      { protocol: "Protocol", glossary: "Glossary", rfc: "RFC" }[result.type] ||
      "Reference";
    heading.append(link);
    excerpt.textContent = plainSnippet(result.excerpt);
    item.append(kind, heading, excerpt);
    list.append(item);
  }
  previous.hidden = page === 0;
  next.hidden = (page + 1) * 10 >= results.length;
  pageLabel.textContent = results.length
    ? `Page ${page + 1} of ${Math.ceil(results.length / 10)}`
    : "";
}
async function run() {
  const token = ++generation,
    q = query.value.trim();
  state();
  retry.hidden = true;
  results = [];
  page = 0;
  render();
  if (!q) {
    status.textContent = "Enter a protocol, term or RFC number";
    return;
  }
  status.textContent = "Loading search…";
  try {
    const [pf, lookup] = await dependencies();
    const match = q.match(/^(?:RFC\s*)?(\d+)$/i);
    let exact: SearchRecord[] = [];
    let searchQuery = q;
    if (match) {
      const number = Number(match[1]);
      searchQuery = `RFC${number}`;
      try {
        const bucket = await json<Record<string, SearchRecord>>(
          `lookup/rfcs/${Math.floor(number / 100)}.json`,
        );
        if (bucket[number]) exact.push(bucket[number]);
      } catch {
        /* A number without an exact lookup can still use the full-text index. */
      }
    }
    exact.push(...(lookup[q.toLowerCase().replace(/\s+/g, " ")] || []));
    if (type.value !== "all")
      exact = exact.filter((r) => r.type === type.value);
    const response = await pf.search(searchQuery, {
      filters: type.value === "all" ? {} : { type: type.value },
    });
    if (token !== generation) return;
    const ranked = await Promise.all(response.results.map((r) => r.data()));
    if (token !== generation) return;
    const seen = new Set<string>();
    results = [
      ...exact,
      ...ranked.map((r) => ({
        title: r.meta.title,
        type: r.meta.type,
        url: r.url,
        excerpt: r.excerpt,
      })),
    ].filter((r) => {
      const dest = new URL(r.url, location.origin);
      if (dest.origin !== location.origin || !dest.pathname.startsWith(base))
        return false;
      const key =
        r.type === "protocol" ? dest.pathname : dest.pathname + dest.hash;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    status.textContent = results.length
      ? `${results.length} ${results.length === 1 ? "result" : "results"} for “${q}”`
      : `No results for “${q}”. Try another term or browse the reference.`;
    render();
  } catch {
    if (token !== generation) return;
    status.textContent =
      "Search could not load. Retry or browse the reference below.";
    retry.hidden = false;
  }
}
export function openSearch(
  trigger: HTMLElement | null,
  initial = "",
  filter = "all",
) {
  opener = trigger || (document.activeElement as HTMLElement);
  query.value = initial;
  type.value = types.includes(filter) ? filter : "all";
  if (!dialog.open) dialog.showModal();
  query.focus();
  void run();
}
query.addEventListener("input", () => {
  generation++;
  clearTimeout(timer);
  timer = setTimeout(() => void run(), 180);
});
type.addEventListener("change", () => void run());
document.querySelector("#search-form")!.addEventListener("submit", (event) => {
  event.preventDefault();
  clearTimeout(timer);
  void run();
});
retry.addEventListener("click", () => {
  attempt++;
  engine = undefined;
  identifiers = undefined;
  void run();
});
document
  .querySelector("#search-close")!
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  generation++;
  clearTimeout(timer);
  const address = new URL(location.href);
  address.searchParams.delete("q");
  address.searchParams.delete("type");
  history.replaceState(null, "", address);
  opener?.focus();
});
previous.addEventListener("click", () => {
  page--;
  render();
  list.querySelector("a")?.focus();
});
next.addEventListener("click", () => {
  page++;
  render();
  list.querySelector("a")?.focus();
});
