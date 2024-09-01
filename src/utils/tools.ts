export function getPictureUrl(url: string) {
  if (url.startsWith("http")) {
    return url;
  } else if (url.startsWith("/")) {
    return new URL(`/src/assets/${url.slice(1)}`, import.meta.url).href;
  } else {
    return new URL(`/src/assets/${url}`, import.meta.url).href;
  }
}

export function warn(message: string) {
  console.warn(`[Treasure Warning] ${message}`);
}

export function error(message: string) {
  console.error(`[Treasure Error] ${message}`);
}

export function info(message: string) {
  console.info(`[Treasure Info] ${message}`);
}
