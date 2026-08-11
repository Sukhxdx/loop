/**
 * Browser loads images via wsrv.nl (caching CDN + WebP), not through Render's
 * Next optimizer. Picsum alone is slow (redirects + no format negotiation).
 */
export default function picsumLoader({ src, width }) {
  const idMatch = src.match(/\/id\/(\d+)\//);
  const seedMatch = src.match(/\/seed\/([^/]+)\//);
  const size = Math.min(Math.max(width, 64), 800);

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
