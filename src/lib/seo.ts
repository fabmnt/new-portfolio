export function getBaseUrl(site: URL | undefined, url: URL) {
  const base = site?.toString() ?? url.origin;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}
