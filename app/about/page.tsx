import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — The Hair Club Aligarh",
  description:
    "Discover the story behind The Hair Club Aligarh. Professional expertise, premium products, impeccable hygiene, and absolute client satisfaction.",
};

export default function AboutPage() {
  const valueImages = [
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1585747860019-8929b3650398?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=400&fit=crop",
  ];

  return (
    <>
      {/* Hero with image */}
      <section className="relative pt-34 pb-20 md:pt-38 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={brandImages.salonInterior}
            alt="The Hair Club Aligarh Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-warm/90 via-neutral-warm/75 to-neutral-warm/95" />
        </div>

        <div className="container-luxury text-center relative z-10">
          <AnimatedSection>
            <p className="label-luxury mb-4">Our Story</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-luxury text-heading-1 md:text-display mb-6">
              About Us
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="divider-ornament mb-6">
              <span className="w-2 h-2 rotate-45 bg-gold/60" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className="text-body-lg text-taupe max-w-2xl mx-auto leading-relaxed">
              At The Hair Club Aligarh, we believe grooming is not just a
              service — it is an experience. Every detail is crafted to make
              you feel exceptional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Grid */}
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image
                        src={brandImages.about1}
                        alt="Salon experience"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={brandImages.tools}
                        alt="Premium tools"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-square relative overflow-hidden">
                      <Image
                        src={brandImages.about2}
                        alt="Expert styling"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <Image
                        src={brandImages.salonChair}
                        alt="Premium salon chair"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
                {/* Decorative frame */}
                <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 border border-gold/15 -z-10" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <div>
              <AnimatedSection delay={100}>
                <h2 className="heading-luxury text-heading-2 md:text-heading-1 mb-8">
                  A Vision of
                  <br />
                  <span className="italic text-gold">Excellence</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-body-lg text-taupe leading-relaxed mb-6">
                  Founded with a singular vision — to bring world-class
                  grooming to Aligarh. The Hair Club represents a new
                  standard in personal care, where every service is a blend
                  of artistry and precision.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <p className="text-body text-taupe/80 leading-relaxed mb-6">
                  Our journey began with a simple belief: everyone deserves
                  to feel confident and polished. Today, we stand as
                  Aligarh&apos;s premier luxury grooming destination,
                  trusted by thousands of discerning clients.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <p className="text-body text-taupe/80 leading-relaxed">
                  From the moment you step through our doors, you&apos;ll
                  experience the difference that dedication to craft makes.
                  Premium products, expert hands, and an ambiance designed
                  for relaxation — this is grooming reimagined.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white/40">
        <div className="container-luxury">
          <SectionHeader
            label="Our Values"
            title="What Sets Us Apart"
            description="Four pillars that define every experience at The Hair Club."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "◈",
                title: "Professional Expertise",
                description:
                  "Our team of certified stylists brings years of training and passion to every service. Continuous learning keeps us ahead of trends.",
              },
              {
                icon: "◇",
                title: "Hygiene Standards",
                description:
                  "Hospital-grade sterilization, single-use tools where applicable, and meticulous cleanliness protocols throughout our salon.",
              },
              {
                icon: "✦",
                title: "Premium Products",
                description:
                  "We exclusively use internationally acclaimed brands and professional-grade products to ensure the finest results for every client.",
              },
              {
                icon: "❋",
                title: "Client Satisfaction",
                description:
                  "Your satisfaction is our obsession. From consultation to the final touch, every step is tailored to exceed your expectations.",
              },
            ].map((value, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div className="card-luxury text-center h-full group overflow-hidden p-0">
                  {/* Value Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={valueImages[i]}
                      alt={value.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

                    {/* Icon overlay */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white shadow-card flex items-center justify-center">
                      <span className="text-xl text-gold">{value.icon}</span>
                    </div>
                  </div>

                  <div className="p-8 pt-6">
                    <h3 className="font-serif text-heading-4 text-charcoal mb-4">
                      {value.title}
                    </h3>
                    <p className="text-body-sm text-taupe leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 md:py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-6 border border-gold/10 pointer-events-none" />
        <div className="container-luxury relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "5+", label: "Years of Excellence" },
              { number: "2,000+", label: "Happy Clients" },
              { number: "12+", label: "Premium Services" },
              { number: "15K+", label: "Services Delivered" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center">
                  <span className="font-serif text-display md:text-display-xl text-gold block mb-2">
                    {stat.number}
                  </span>
                  <span className="text-caption text-neutral-warm/40 tracking-[0.15em]">
                    {stat.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="section-padding section-bg-pattern">
        <div className="container-tight text-center">
          <AnimatedSection>
            <p className="label-luxury mb-4">Our Promise</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="divider-ornament mb-8">
              <span className="w-2 h-2 rotate-45 bg-gold/60" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <blockquote className="font-serif text-heading-2 md:text-heading-1 text-charcoal italic leading-snug mb-8">
              &ldquo;We don&apos;t just style hair.
              <br />
              We craft{" "}
              <span className="text-gold not-italic">confidence</span>.&rdquo;
            </blockquote>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className="text-body text-taupe mb-10">
              — The Hair Club Aligarh Team
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <Link href="/booking" className="btn-primary">
              Experience It Yourself
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}