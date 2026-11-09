export function normalizeBase(value = "/protocolhub/") {
  if (!/^\/[a-zA-Z0-9/_-]*$/.test(value))
    throw new Error("SITE_BASE must be an absolute directory path");
  return value === "/"
    ? "/"
    : `/${value.split("/").filter(Boolean).join("/")}/`;
}
export const base = normalizeBase(process.env.SITE_BASE);
export const origin = process.env.SITE_ORIGIN || "https://tintii.github.io";
if (!/^https?:\/\//.test(origin) || new URL(origin).pathname !== "/")
  throw new Error("SITE_ORIGIN must be an HTTP(S) origin without a path");
export function url(path = "") {
  return base + path.replace(/^\//, "");
}
export function canonical(path = "") {
  return new URL(url(path), origin).href;
}
export function rfcPath(index, order = "newest") {
  return `rfcs/${order}/${Math.floor(index / 100) + 1}/`;
}
export function rfcDestinations(records) {
  return Object.fromEntries(
    [...records]
      .sort((a, b) => b.number - a.number)
      .map((r, i) => [r.number, `${rfcPath(i)}#rfc-${r.number}`]),
  );
}
