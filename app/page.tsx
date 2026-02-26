import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import CountdownTimer from "@/components/CountdownTimer";
import GalleryPreviewImage from "@/components/GalleryPreviewImage";
import { services, testimonials, galleryItems, brandImages } from "@/lib/data";

/* ─────────────────────── Hero ─────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={brandImages.heroBg}
          alt="The Hair Club Aligarh Salon Interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-warm/85 via-neutral-warm/70 to-neutral-warm/90" />
        <div className="absolute inset-0 section-bg-pattern" />
      </div>

      {/* Decorative corners */}
      <div className="absolute top-20 left-8 md:left-16 w-20 h-20 border-l border-t border-cream-dark/40" />
      <div className="absolute bottom-20 right-8 md:right-16 w-20 h-20 border-r border-b border-cream-dark/40" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-gold/40 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gold/30 rounded-full animate-float animate-delay-300" />

      <div className="relative z-10 text-center container-luxury">
        {/* Logo Mark */}
        <AnimatedSection delay={200} direction="scale">
          <div className="mb-10 inline-flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 border border-gold/40 rotate-45 flex items-center justify-center mb-8 backdrop-blur-sm bg-neutral-warm/20">
              <span className="font-serif text-heading-2 md:text-heading-1 text-gold -rotate-45">
                H
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Brand Name */}
        <AnimatedSection delay={400}>
          <h1 className="font-serif text-display md:text-display-xl text-charcoal tracking-[0.04em] mb-2">
            The Hair Club
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <p className="text-caption tracking-[0.4em] text-gold uppercase mb-8">
            Aligarh
          </p>
        </AnimatedSection>

        {/* Decorative line */}
        <AnimatedSection delay={600}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-cream-dark" />
            <span className="w-1.5 h-1.5 bg-gold/60 rotate-45" />
            <span className="h-px w-12 bg-cream-dark" />
          </div>
        </AnimatedSection>

        {/* Tagline */}
        <AnimatedSection delay={700}>
          <p className="font-sans text-body-lg md:text-xl text-taupe max-w-lg mx-auto leading-relaxed mb-12">
            Luxury Hair & Grooming Experience
          </p>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={900}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/booking" className="btn-primary">
              Book Appointment
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection delay={1200}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-caption text-taupe/50 tracking-[0.2em]">
              SCROLL
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-taupe/40 to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────── About Preview ─────────────────── */
function AboutPreview() {
  return (
    <section className="section-padding bg-white/40">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={brandImages.about1}
                  alt="The Hair Club Aligarh - Premium Salon Experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative frame offset */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-charcoal p-6 md:p-8 shadow-elevated z-10">
                <span className="font-serif text-heading-1 text-gold block">
                  5+
                </span>
                <span className="text-caption text-neutral-warm/50 tracking-[0.15em]">
                  YEARS OF
                  <br />
                  EXCELLENCE
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div>
            <AnimatedSection delay={100}>
              <p className="label-luxury mb-4">Our Story</p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="divider-ornament justify-start mb-6">
                <span className="w-2 h-2 rotate-45 bg-gold/60" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <h2 className="heading-luxury text-heading-2 md:text-heading-1 mb-8">
                Where Grooming
                <br />
                <span className="italic text-gold">Becomes Art</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <p className="text-body-lg text-taupe leading-relaxed mb-6">
                At The Hair Club Aligarh, we believe grooming is not just a
                service — it is an experience. Every visit is a journey into
                refined elegance and personal transformation.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <p className="text-body text-taupe/80 leading-relaxed mb-10">
                Our team of expert stylists combines traditional craftsmanship
                with contemporary techniques, using only premium products to
                deliver results that exceed expectations.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="grid grid-cols-2 gap-8 mb-10">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "2K+", label: "Happy Clients" },
                  { number: "12+", label: "Premium Services" },
                  { number: "100%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="font-serif text-heading-2 text-gold">
                      {stat.number}
                    </span>
                    <p className="text-caption text-taupe/60 mt-1 tracking-[0.1em]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Services Preview ─────────────────── */
function ServicesPreview() {
  const featuredServices = services.slice(0, 6);

  return (
    <section className="section-padding section-bg-pattern">
      <div className="container-luxury">
        <SectionHeader
          label="Our Services"
          title="Premium Hair & Beauty Services"
          description="Curated treatments designed for the discerning individual who values excellence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredServices.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 100}>
              <div className="card-luxury group h-full overflow-hidden p-0">
                {/* Service Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-charcoal/70 backdrop-blur-sm">
                    <span className="text-caption text-neutral-warm tracking-[0.1em]">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 pt-6">
                  {/* Icon */}
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-gold/10 group-hover:border-gold/50">
                    <span className="text-base text-gold">{service.icon}</span>
                  </div>

                  <h3 className="font-serif text-heading-4 text-charcoal mb-3 group-hover:text-gold transition-colors duration-500">
                    {service.name}
                  </h3>
                  <p className="text-body-sm text-taupe leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-cream/60">
                    <span className="font-serif text-heading-4 text-gold">
                      {service.price}
                    </span>
                    <Link
                      href={`/booking?service=${encodeURIComponent(
                        service.name
                      )}`}
                      className="text-caption text-charcoal/60 tracking-[0.1em] uppercase
                                 hover:text-gold transition-colors duration-500
                                 flex items-center gap-2 group/link"
                    >
                      Book
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
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="text-center mt-14">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ────────────────── Special Offer ────────────────── */
function SpecialOffer() {
  const offerServices = [
    "Korean Hydra Facial",
    "Premium Hair Spa",
    "Advanced Haircut",
    "Beard Grooming",
    "Head Massage",
    "Thread Work",
    "Premium Manicure",
    "Half Hand Wax",
  ];

  return (
    <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={brandImages.specialOffer}
          alt="Special Offer Background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(191,163,111,0.3)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(191,163,111,0.2)_0%,transparent_50%)]" />
      </div>

      {/* Decorative borders */}
      <div className="absolute top-8 left-8 right-8 bottom-8 border border-gold/10 pointer-events-none" />

      <div className="relative z-10 container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <AnimatedSection>
              <p className="label-luxury text-gold/60 mb-4">Limited Offer</p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-gold/40" />
                <span className="w-1.5 h-1.5 bg-gold/40 rotate-45" />
                <span className="h-px w-8 bg-gold/40" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h2 className="font-serif text-heading-1 md:text-display text-neutral-warm mb-4">
                Male Special
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-serif text-display text-gold">
                  ₹1,999
                </span>
                <span className="text-body text-neutral-warm/40">
                  / Choose Any 5 Services
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {offerServices.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 py-2"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-body-sm text-neutral-warm/70">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <Link href="/booking" className="btn-outline-gold">
                Claim This Offer
              </Link>
            </AnimatedSection>
          </div>

          {/* Right: Timer */}
          <div>
            <AnimatedSection delay={300}>
              <div className="text-center">
                <p className="label-luxury text-neutral-warm/30 mb-8">
                  Offer Ends In
                </p>
                <CountdownTimer />
                <p className="text-body-sm text-neutral-warm/30 mt-8 max-w-sm mx-auto">
                  Don&apos;t miss this exclusive opportunity. Limited slots
                  available each week.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Gallery Preview ──────────────── */
function GalleryPreview() {
  return (
    <section className="section-padding bg-white/40">
      <div className="container-luxury">
        <SectionHeader
          label="Transformations"
          title="Before & After"
          description="Witness the artistry of our expert stylists through real transformations."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryItems.slice(0, 4).map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 100}>
              <Link href="/gallery" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <GalleryPreviewImage item={item} />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/0 to-charcoal/0 group-hover:from-charcoal/90 group-hover:via-charcoal/40 transition-all duration-700 flex items-end p-5">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <p className="text-caption text-gold tracking-[0.15em] mb-1">
                        BEFORE → AFTER
                      </p>
                      <p className="font-serif text-heading-4 text-neutral-warm">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/0 group-hover:border-gold/40 transition-all duration-500" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="text-center mt-14">
            <Link href="/gallery" className="btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─────────────────── Testimonials ─────────────────── */
function TestimonialsSection() {
  return (
    <section className="section-padding section-bg-pattern">
      <div className="container-luxury">
        <SectionHeader
          label="Testimonials"
          title="What Our Clients Say"
          description="Experiences shared by those who trust us with their grooming."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <AnimatedSection key={testimonial.id} delay={i * 150}>
              <div className="card-luxury h-full flex flex-col">
                {/* Quote mark */}
                <span className="font-serif text-6xl text-gold/20 leading-none mb-4">
                  &ldquo;
                </span>

                {/* Review text */}
                <p className="text-body text-taupe leading-relaxed flex-1 mb-6">
                  {testimonial.text}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Author with Avatar */}
                <div className="pt-4 border-t border-cream/60 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20 flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-heading-4 text-charcoal">
                      {testimonial.name}
                    </p>
                    <p className="text-caption text-taupe/60 mt-0.5 tracking-[0.05em]">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Contact CTA ─────────────────── */
function ContactCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={brandImages.salonInterior}
          alt="Salon Interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-warm/90 via-neutral-warm/85 to-neutral-warm/90" />
      </div>

      <div className="container-tight text-center relative z-10">
        <AnimatedSection>
          <p className="label-luxury mb-4">Visit Us</p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="divider-ornament mb-6">
            <span className="w-2 h-2 rotate-45 bg-gold/60" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <h2 className="heading-luxury text-heading-2 md:text-heading-1 mb-6">
            Ready for a
            <br />
            <span className="italic text-gold">Premium Experience?</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-body-lg text-taupe max-w-xl mx-auto mb-10">
            Step into The Hair Club Aligarh and discover the difference that
            true luxury grooming makes.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/booking" className="btn-primary">
              Book Your Visit
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get Directions
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ═════════════════════ Homepage ═════════════════════ */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <SpecialOffer />
      <GalleryPreview />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}