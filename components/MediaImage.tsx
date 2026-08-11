"use client";

import Image, { type ImageProps } from "next/image";

/** Tiny surface-color blur so cards never flash empty while CDN responds */
export const IMAGE_BLUR =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><rect width="100%" height="100%" fill="#1E2023"/></svg>`
  );

type MediaImageProps = Omit<ImageProps, "alt"> & {
  alt?: string;
};

export function MediaImage({
  alt = "",
  className = "",
  ...props
}: MediaImageProps) {
  return (
    <Image
      alt={alt}
      placeholder="blur"
      blurDataURL={IMAGE_BLUR}
      className={`bg-bg-surface-hover ${className}`}
      {...props}
    />
  );
}
