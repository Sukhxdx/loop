/**
 * Sized WebP via wsrv.nl. Supports loremflickr topical URLs (and legacy picsum).
 */
export default function imageLoader({ src, width }) {
  const size = Math.min(Math.max(width, 64), 800);

  const flickr = src.match(
    /loremflickr\.com\/\d+\/\d+\/([^?]+)(?:\?lock=(\d+))?/i
  );
  if (flickr) {
    const query = flickr[1];
    const lock = flickr[2] ? `?lock=${flickr[2]}` : "";
    const upstream = `loremflickr.com/${size}/${size}/${query}${lock}`;
    return `https://wsrv.nl/?url=${encodeURIComponent(upstream)}&w=${size}&h=${size}&fit=cover&output=webp&q=70`;
  }

  const idMatch = src.match(/\/id\/(\d+)\//);
  const seedMatch = src.match(/\/seed\/([^/]+)\//);
  let upstream;
  if (idMatch) {
    upstream = `picsum.photos/id/${idMatch[1]}/${size}/${size}`;
  } else if (seedMatch) {
    upstream = `picsum.photos/seed/${encodeURIComponent(seedMatch[1])}/${size}/${size}`;
  } else {
    return src;
  }

  return `https://wsrv.nl/?url=${encodeURIComponent(upstream)}&w=${size}&h=${size}&fit=cover&output=webp&q=70`;
}
