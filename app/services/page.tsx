import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { services, brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services — The Hair Club Aligarh",
  description:
    "Explore our premium services: Korean Hydra Facial, Premium Hair Spa, Advanced Haircut, Beard Grooming & more. Best hair salon services in Aligarh.",
};

export default function ServicesPage() {
  const categories = [
    { key: "facial", label: "Facial Treatments" },
    { key: "hair", label: "Hair Services" },
    { key: "grooming", label: "Grooming" },
    { key: "body", label: "Body Care" },
  ];

  return (
    <>
      {/* Hero with Image */}
      <section className="relative pt-34 pb-20 md:pt-38 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={brandImages.tools}
            alt="Premium Salon Tools"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-warm/90 via-neutral-warm/80 to-neutral-warm/95" />
        </div>

        <div className="container-luxury text-center relative z-10">
          <AnimatedSection>
            <p className="label-luxury mb-4">What We Offer</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-luxury text-heading-1 md:text-display mb-6">
              Our Services
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-body-lg text-taupe max-w-xl mx-auto">
              Each service is thoughtfully designed to deliver a premium
              grooming experience with exceptional results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((category) => {
        const categoryServices = services.filter(
          (s) => s.category === category.key
        );
        if (categoryServices.length === 0) return null;

        return (
          <section
            key={category.key}
            className="py-16 md:py-20 even:bg-white/40"
          >
            <div className="container-luxury">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-12">
                  <span className="h-px flex-1 bg-cream-dark/40" />
                  <h2 className="font-serif text-heading-3 text-charcoal tracking-[0.05em]">
                    {category.label}
                  </h2>
                  <span className="h-px flex-1 bg-cream-dark/40" />
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categoryServices.map((service, i) => (
                  <AnimatedSection key={service.id} delay={i * 100}>
                    <div className="card-luxury h-full group overflow-hidden p-0">
                      {/* Image */}
                      <div className="relative h-52 md:h-60 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                        {/* Duration badge */}
                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-charcoal/70 backdrop-blur-sm">
                          <span className="text-caption text-neutral-warm tracking-[0.1em]">
                            {service.duration}
                          </span>
                        </div>

                        {/* Price badge */}
                        <div className="absolute bottom-4 left-4 px-4 py-2 bg-gold/90 backdrop-blur-sm">
                          <span className="font-serif text-heading-4 text-white">
                            {service.price}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-10 pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-10 h-10 border border-gold/30 flex items-center justify-center transition-all duration-500 group-hover:bg-gold/10 group-hover:border-gold/50 group-hover:rotate-3">
                            <span className="text-base text-gold">
                              {service.icon}
                            </span>
                          </div>
                        </div>

                        <h3 className="font-serif text-heading-4 text-charcoal mb-3 group-hover:text-gold transition-colors duration-500">
                          {service.name}
                        </h3>
                        <p className="text-body-sm text-taupe leading-relaxed mb-8">
                          {service.description}
                        </p>

                        {/* CTA */}
                        <Link
                          href={`/booking?service=${encodeURIComponent(
                            service.name
                          )}`}
                          className="inline-flex items-center gap-2 text-caption text-charcoal/60 tracking-[0.1em] uppercase
                                     hover:text-gold transition-colors duration-500 group/link"
                        >
                          Book This Service
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Special Offer Banner */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={brandImages.salonChair}
            alt="Salon Chair"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        <div className="absolute inset-6 border border-gold/10 pointer-events-none" />
        <div className="container-luxury text-center relative z-10">
          <AnimatedSection>
            <p className="label-luxury text-gold/50 mb-4">Exclusive</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="font-serif text-heading-1 md:text-display text-neutral-warm mb-4">
              Male Special —{" "}
              <span className="text-gold">₹1,999</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-body-lg text-neutral-warm/50 mb-10 max-w-lg mx-auto">
              Choose any 5 services from our complete menu. The ultimate
              grooming package at an unbeatable price.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <Link href="/booking" className="btn-outline-gold">
              Claim This Offer
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-cream/30">
        <div className="container-tight text-center">
          <AnimatedSection>
            <h2 className="heading-luxury text-heading-2 md:text-heading-1 mb-6">
              Can&apos;t Decide?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-body-lg text-taupe mb-10 max-w-lg mx-auto">
              Our experts will recommend the perfect services for you. Get in
              touch and let us guide your grooming journey.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Link href="/contact" className="btn-primary">
              Consult Our Experts
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}