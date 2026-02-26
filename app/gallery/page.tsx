"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { galleryItems, GalleryItem } from "@/lib/data";
import GalleryCard from "@/components/GalleryCard";
import GalleryLightbox from "@/components/GalleryLightbox";

const categories = [
  { key: "all", label: "All" },
  { key: "haircut", label: "Haircuts" },
  { key: "grooming", label: "Grooming" },
  { key: "facial", label: "Facials" },
  { key: "color", label: "Color" },
  { key: "treatment", label: "Treatments" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "all"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1
    );
  };

  const goToNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1
    );
  };

  return (
    <>
      {/* Hero with Background Image */}
      <section className="relative pt-34 pb-16 md:pt-38 md:pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* <Image
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&h=600&fit=crop"
            alt="Gallery Background"
            fill
            className="object-cover"
            priority
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-warm/92 via-neutral-warm/85 to-neutral-warm/95" />
          <div className="absolute inset-0 section-bg-pattern" />
        </div>

        {/* Decorative corners */}
        <div className="absolute top-20 left-8 w-16 h-16 border-l border-t border-cream-dark/30" />
        <div className="absolute bottom-10 right-8 w-16 h-16 border-r border-b border-cream-dark/30" />

        <div className="container-luxury text-center relative z-10">
          <AnimatedSection>
            <p className="label-luxury mb-4">Portfolio</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-luxury text-heading-1 md:text-display mb-6">
              Our Gallery
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="divider-ornament mb-6">
              <span className="w-2 h-2 rotate-45 bg-gold/60" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className="text-body-lg text-taupe max-w-xl mx-auto">
              Real transformations by our expert stylists. Hover to see the
              after result, click to compare with our interactive slider.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section
        className="py-6 md:py-8 border-b border-cream/60 
                      sticky top-[60px] md:top-[72px] 
                      bg-neutral-warm/95 backdrop-blur-xl z-30"
      >
        <div className="container-luxury">
          <div className="flex items-center justify-center gap-1.5 md:gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 md:px-5 md:py-2.5 
                           text-caption tracking-[0.12em] uppercase 
                           transition-all duration-500 ease-luxury
                  ${
                    activeCategory === cat.key
                      ? "bg-charcoal text-neutral-warm shadow-subtle"
                      : "text-taupe hover:text-charcoal hover:bg-cream/50"
                  }`}
              >
                {cat.label}
                {activeCategory === cat.key && (
                  <span className="ml-2 text-gold">
                    ({filteredItems.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interaction Guide */}
      <section className="py-5 bg-gold/5 border-b border-gold/10">
        <div className="container-luxury">
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
            {[
              { step: "①", text: "Hover to preview after" },
              { step: "②", text: "Click to open comparison" },
              { step: "③", text: "Drag slider to compare" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-2">
                <div className="w-6 h-6 border border-gold/30 flex items-center justify-center">
                  <span className="text-xs text-gold">{item.step}</span>
                </div>
                <span className="text-caption text-taupe/60 tracking-[0.05em]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container-luxury">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {filteredItems.map((item, i) => (
                <AnimatedSection key={item.id} delay={i * 80}>
                  <GalleryCard
                    item={item}
                    onClick={() => openLightbox(i)}
                  />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="text-center py-20">
                <div className="w-16 h-16 border border-cream-dark/40 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-6 h-6 text-taupe/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-body-lg text-taupe mb-2">
                  No items in this category yet
                </p>
                <p className="text-body-sm text-taupe/60 mb-6">
                  Check back soon for new transformations!
                </p>
                <button
                  onClick={() => setActiveCategory("all")}
                  className="btn-secondary text-body-sm"
                >
                  View All
                </button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Featured Before & After Showcase */}
      <section className="py-16 md:py-20 bg-white/40">
        <div className="container-luxury">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="label-luxury mb-4">Featured</p>
              <div className="divider-ornament mb-6">
                <span className="w-2 h-2 rotate-45 bg-gold/60" />
              </div>
              <h2 className="heading-luxury text-heading-2 md:text-heading-1">
                Signature Transformations
              </h2>
            </div>
          </AnimatedSection>

          {/* Large Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {galleryItems.slice(0, 2).map((item, i) => (
              <AnimatedSection key={`featured-${item.id}`} delay={i * 150}>
                <div
                  className="group relative cursor-pointer overflow-hidden"
                  onClick={() => {
                    setActiveCategory("all");
                    openLightbox(i);
                  }}
                >
                  {/* Before / After Side by Side */}
                  <div className="grid grid-cols-2 gap-1">
                    {/* Before */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={item.beforeImage}
                        alt={`${item.title} - Before`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-charcoal/70 backdrop-blur-sm text-caption text-neutral-warm tracking-[0.15em] uppercase">
                          Before
                        </span>
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={item.afterImage}
                        alt={`${item.title} - After`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                      <div className="absolute bottom-4 right-4">
                        <span className="px-3 py-1.5 bg-gold/80 backdrop-blur-sm text-caption text-white tracking-[0.15em] uppercase">
                          After
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info Bar */}
                  <div className="bg-white/80 backdrop-blur-sm p-6 flex items-center justify-between border border-cream/60 border-t-0">
                    <div>
                      <h3 className="font-serif text-heading-4 text-charcoal group-hover:text-gold transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-caption text-taupe/50 mt-1 tracking-[0.08em]">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:border-gold">
                      <svg
                        className="w-4 h-4 text-gold group-hover:text-white transition-colors duration-500"
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

                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-transparent group-hover:border-gold/40 transition-all duration-500 z-10" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-transparent group-hover:border-gold/40 transition-all duration-500 z-10" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mosaic Gallery Strip */}
      <section className="py-16 md:py-20 section-bg-pattern">
        <div className="container-luxury">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="label-luxury mb-4">Showcase</p>
              <h2 className="heading-luxury text-heading-2">
                Our <span className="italic text-gold">Best Work</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Masonry-style Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Tall image */}
            <AnimatedSection delay={0} className="row-span-2">
              <div
                className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden group cursor-pointer"
                onClick={() => {
                  setActiveCategory("all");
                  openLightbox(0);
                }}
              >
                <Image
                  src={galleryItems[0].afterImage}
                  alt={galleryItems[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-caption text-gold tracking-[0.15em] mb-1">
                    {galleryItems[0].category.toUpperCase()}
                  </p>
                  <h3 className="font-serif text-heading-4 text-white">
                    {galleryItems[0].title}
                  </h3>
                </div>
              </div>
            </AnimatedSection>

            {/* Square images */}
            {galleryItems.slice(2, 4).map((item, i) => (
              <AnimatedSection key={`mosaic-${item.id}`} delay={(i + 1) * 100}>
                <div
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                  onClick={() => {
                    setActiveCategory("all");
                    openLightbox(i + 2);
                  }}
                >
                  <Image
                    src={item.afterImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-caption text-gold tracking-[0.1em] mb-0.5">
                      {item.category.toUpperCase()}
                    </p>
                    <h3 className="font-serif text-body-sm text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Wide horizontal image */}
            <AnimatedSection delay={300} className="col-span-1">
              <div
                className="relative aspect-square overflow-hidden group cursor-pointer"
                onClick={() => {
                  setActiveCategory("all");
                  openLightbox(4);
                }}
              >
                <Image
                  src={galleryItems[4].afterImage}
                  alt={galleryItems[4].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-caption text-gold tracking-[0.1em] mb-0.5">
                    {galleryItems[4].category.toUpperCase()}
                  </p>
                  <h3 className="font-serif text-body-sm text-white">
                    {galleryItems[4].title}
                  </h3>
                </div>
              </div>
            </AnimatedSection>

            {/* More square images */}
            {galleryItems.slice(5, 8).map((item, i) => (
              <AnimatedSection key={`mosaic2-${item.id}`} delay={(i + 4) * 100}>
                <div
                  className="relative aspect-square overflow-hidden group cursor-pointer"
                  onClick={() => {
                    setActiveCategory("all");
                    openLightbox(i + 5);
                  }}
                >
                  <Image
                    src={item.afterImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-caption text-gold tracking-[0.1em] mb-0.5">
                      {item.category.toUpperCase()}
                    </p>
                    <h3 className="font-serif text-body-sm text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-14 md:py-18 overflow-hidden">
        <div className="absolute inset-0">
          {/* <Image
            src="https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=1920&h=400&fit=crop"
            alt="Salon Background"
            fill
            className="object-cover"
          /> */}
          <div className="absolute inset-0 bg-charcoal/92" />
        </div>
        <div className="absolute inset-4 border border-gold/10 pointer-events-none" />
        <div className="container-luxury relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Transformations" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "12+", label: "Services Offered" },
              { number: "5+", label: "Years of Craft" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center">
                  <span className="font-serif text-heading-2 md:text-heading-1 text-gold">
                    {stat.number}
                  </span>
                  <p className="text-caption text-neutral-warm/30 tracking-[0.12em] mt-1">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          {/* <Image
            src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=1920&h=600&fit=crop&crop=faces"
            alt="Book Appointment"
            fill
            className="object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-warm/92 via-neutral-warm/88 to-neutral-warm/92" />
        </div>
        <div className="container-tight text-center relative z-10">
          <AnimatedSection>
            <p className="label-luxury mb-4">Your Turn</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="divider-ornament mb-6">
              <span className="w-2 h-2 rotate-45 bg-gold/60" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h2 className="heading-luxury text-heading-2 md:text-heading-1 mb-6">
              Ready for Your{" "}
              <span className="italic text-gold">Transformation?</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className="text-body-lg text-taupe mb-10 max-w-lg mx-auto">
              Join thousands of satisfied clients. Book your appointment
              today and be our next success story.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/booking" className="btn-primary">
                Book Appointment
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20saw%20your%20gallery%20and%20want%20to%20book"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <GalleryLightbox
          item={filteredItems[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          currentIndex={lightboxIndex}
          totalItems={filteredItems.length}
        />
      )}
    </>
  );
}