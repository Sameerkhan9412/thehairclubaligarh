"use client";

import { useEffect, useCallback } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { GalleryItem } from "@/lib/data";

interface GalleryLightboxProps {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
}

export default function GalleryLightbox({
  item,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalItems,
}: GalleryLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/95 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-4 md:mx-8 animate-scale-in">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:top-4 md:-right-12
                     w-10 h-10 flex items-center justify-center
                     text-neutral-warm/60 hover:text-white
                     transition-colors duration-300 z-20"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Slider */}
        <div className="aspect-[4/3] md:aspect-[16/10] w-full">
          <BeforeAfterSlider
            beforeImage={item.beforeImage}
            afterImage={item.afterImage}
            beforeAlt={`${item.title} - Before`}
            afterAlt={`${item.title} - After`}
            className="w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="bg-charcoal/80 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-heading-4 text-neutral-warm">{item.title}</h3>
            <p className="text-body-sm text-neutral-warm/50 mt-1">{item.description}</p>
          </div>
          <span className="text-caption text-neutral-warm/30 tracking-[0.1em]">
            {currentIndex + 1} / {totalItems}
          </span>
        </div>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-0 md:-translate-x-14
                     w-10 h-10 md:w-12 md:h-12
                     bg-charcoal/60 hover:bg-gold/80 backdrop-blur-sm
                     flex items-center justify-center
                     text-neutral-warm/80 hover:text-white
                     transition-all duration-300 z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-14
                     w-10 h-10 md:w-12 md:h-12
                     bg-charcoal/60 hover:bg-gold/80 backdrop-blur-sm
                     flex items-center justify-center
                     text-neutral-warm/80 hover:text-white
                     transition-all duration-300 z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <p className="text-caption text-neutral-warm/20 tracking-[0.15em]">
          ← → NAVIGATE · ESC CLOSE · DRAG TO COMPARE
        </p>
      </div>
    </div>
  );
}