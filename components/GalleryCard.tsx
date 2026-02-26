"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/lib/data";

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`View ${item.title} before and after`}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {!imageError ? (
          <>
            {/* Before Image (default) */}
            <Image
              src={item.beforeImage}
              alt={`${item.title} - Before`}
              fill
              className={`object-cover transition-all duration-700 ease-luxury
                ${isHovered ? "opacity-0 scale-110" : "opacity-100 scale-100"}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={() => setImageError(true)}
            />

            {/* After Image */}
            <Image
              src={item.afterImage}
              alt={`${item.title} - After`}
              fill
              className={`object-cover transition-all duration-700 ease-luxury
                ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-taupe/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-5xl text-taupe/15 block mb-2">
                  {item.category === "haircut"
                    ? "✂"
                    : item.category === "grooming"
                    ? "⬥"
                    : item.category === "facial"
                    ? "◈"
                    : item.category === "color"
                    ? "◎"
                    : "❋"}
                </span>
                <span className="text-caption text-taupe/30 tracking-[0.2em]">
                  {item.category.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent
                        opacity-0 group-hover:opacity-100 transition-all duration-700"
        />

        {/* Before/After Label */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`px-3 py-1.5 backdrop-blur-sm text-caption tracking-[0.15em] uppercase
              transition-all duration-500
              ${
                isHovered
                  ? "bg-gold/80 text-white"
                  : "bg-charcoal/50 text-white/80"
              }`}
          >
            {isHovered ? "After" : "Before"}
          </span>
        </div>

        {/* Hover Content */}
        <div
          className="absolute bottom-0 left-0 right-0 p-5 z-10
                        opacity-0 group-hover:opacity-100
                        translate-y-4 group-hover:translate-y-0
                        transition-all duration-500 delay-100"
        >
          <p className="text-caption text-gold/80 tracking-[0.15em] mb-1 uppercase">
            Tap to compare
          </p>
          <h3 className="font-serif text-heading-4 text-white">
            {item.title}
          </h3>
          <p className="text-body-sm text-white/60 mt-1">{item.description}</p>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-transparent group-hover:border-gold/40 transition-all duration-500 z-10" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-transparent group-hover:border-gold/40 transition-all duration-500 z-10" />

        {/* Expand Icon */}
        <div
          className="absolute top-4 right-4 w-8 h-8
                        flex items-center justify-center
                        bg-white/0 group-hover:bg-white/20 backdrop-blur-sm
                        opacity-0 group-hover:opacity-100
                        scale-75 group-hover:scale-100
                        transition-all duration-500 z-10"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
      </div>

      {/* Title Below */}
      <div className="py-4">
        <h3 className="font-serif text-heading-4 text-charcoal group-hover:text-gold transition-colors duration-500">
          {item.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <p className="text-caption text-taupe/50 tracking-[0.08em] uppercase">
            {item.category}
          </p>
          <p className="text-caption text-taupe/40 tracking-[0.08em] flex items-center gap-1.5">
            <span className="w-1 h-1 bg-gold/50 rounded-full" />
            Before & After
          </p>
        </div>
      </div>
    </div>
  );
}