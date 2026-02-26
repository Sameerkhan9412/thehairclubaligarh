"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/lib/data";

interface GalleryPreviewImageProps {
  item: GalleryItem;
}

export default function GalleryPreviewImage({ item }: GalleryPreviewImageProps) {
  const [error, setError] = useState(false);
  const iconMap: Record<string, string> = {
    haircut: "✂",
    grooming: "◈",
    facial: "❋",
    color: "◎",
    treatment: "❂",
  };

  if (error) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-taupe/20 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
        <div className="text-center">
          <span className="text-4xl text-taupe/15">
            {iconMap[item.category] || "✦"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={item.beforeImage}
      alt={`${item.title} - Before`}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      sizes="(max-width: 768px) 50vw, 25vw"
      onError={() => setError(true)}
    />
  );
}