/**
 * Local /images/* pass through. Unsplash URLs get resized query params.
 */
export default function imageLoader({ src, width }) {
  const size = Math.min(Math.max(width, 64), 800);

  if (src.startsWith("/")) {
    return src;
  }

  if (src.includes("images.unsplash.com")) {
    try {
      const url = new URL(src);
      url.searchParams.set("auto", "format");
      url.searchParams.set("fit", "crop");
      url.searchParams.set("w", String(size));
      url.searchParams.set("h", String(size));
      url.searchParams.set("q", "70");
      return url.toString();
    } catch {
      return src;
    }
  }

  return src;
}
