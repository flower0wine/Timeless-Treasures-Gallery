export function getPictureUrl(url: string) {
  if (url.startsWith("http")) {
    return url;
  } else if (url.startsWith("/")) {
    return new URL(`/src/assets/${url.slice(1)}`, import.meta.url).href;
  } else {
    return new URL(`/src/assets/${url}`, import.meta.url).href;
  }
}
