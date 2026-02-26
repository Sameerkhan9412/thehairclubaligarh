import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact — The Hair Club Aligarh",
  description:
    "Visit The Hair Club Aligarh. Get directions, call us, or chat on WhatsApp. Located in the heart of Aligarh. Best hair salon in Aligarh.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-34 pb-16 md:pt-38 md:pb-20 bg-neutral-warm section-bg-pattern">
        <div className="container-luxury text-center">
          <AnimatedSection>
            <p className="label-luxury mb-4">Get in Touch</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-luxury text-heading-1 md:text-display mb-6">
              Contact Us
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-body-lg text-taupe max-w-lg mx-auto">
              We&apos;d love to hear from you. Visit us, call us, or send a
              message — we&apos;re here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-16 md:py-20">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Information */}
            <div>
              <AnimatedSection>
                <h2 className="heading-luxury text-heading-2 mb-10">
                  Visit Our{" "}
                  <span className="italic text-gold">Salon</span>
                </h2>
              </AnimatedSection>

              <div className="space-y-10">
                {/* Address */}
                <AnimatedSection delay={100}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-heading-4 text-charcoal mb-2">
                        Address
                      </h3>
                      <p className="text-body text-taupe leading-relaxed">
                        The Hair Club
                        <br />
                        Near Centre Point, Ramghat Road
                        <br />
                        Aligarh, Uttar Pradesh 202001
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Phone */}
                <AnimatedSection delay={200}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-heading-4 text-charcoal mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+919876543210"
                        className="text-body text-taupe hover:text-gold transition-colors duration-500"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Hours */}
                <AnimatedSection delay={300}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-heading-4 text-charcoal mb-2">
                        Working Hours
                      </h3>
                      <div className="space-y-1 text-body text-taupe">
                        <p>Monday – Saturday: 10:00 AM – 9:00 PM</p>
                        <p>Sunday: 11:00 AM – 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Social */}
                <AnimatedSection delay={400}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-heading-4 text-charcoal mb-2">
                        Follow Us
                      </h3>
                      <a
                        href="https://instagram.com/thehairclubaligarh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body text-taupe hover:text-gold transition-colors duration-500"
                      >
                        @thehairclubaligarh
                      </a>
                    </div>
                  </div>
                </AnimatedSection>

                {/* WhatsApp CTA */}
                <AnimatedSection delay={500}>
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20The%20Hair%20Club%20Aligarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4
                                 bg-[#25D366] text-white font-sans text-body-sm
                                 tracking-[0.1em] uppercase
                                 transition-all duration-500 ease-luxury
                                 hover:bg-[#20BD5A] hover:shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Us
                    </a>
                    <a href="/booking" className="btn-primary">
                      Book Appointment
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Map */}
            <AnimatedSection delay={200} direction="right">
              <div className="h-full min-h-[400px] lg:min-h-full">
                <div className="h-full border border-cream/60 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.0931!2d78.0219!3d27.8974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a52e0e7e3b1d%3A0x7c6b2c3e1f3c1d5e!2sAligarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Hair Club Aligarh Location"
                    className="grayscale-[40%] contrast-[1.1] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-6 border border-gold/10 pointer-events-none" />
        <div className="container-tight text-center relative z-10">
          <AnimatedSection>
            <div className="w-16 h-16 border border-gold/30 rotate-45 flex items-center justify-center mx-auto mb-8">
              <span className="font-serif text-heading-3 text-gold -rotate-45">
                H
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h2 className="font-serif text-heading-2 md:text-heading-1 text-neutral-warm mb-4">
              We&apos;re Waiting
              <br />
              <span className="italic text-gold">For You</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-body-lg text-neutral-warm/50 max-w-md mx-auto">
              Step into luxury. Step into The Hair Club Aligarh.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}