import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-neutral-warm/70">
      {/* Main Footer */}
      <div className="container-luxury py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-serif text-heading-4 text-neutral-warm tracking-[0.12em]">
                THE HAIR CLUB
              </h3>
              <p className="text-caption tracking-[0.3em] text-gold mt-1">
                ALIGARH
              </p>
            </div>
            <p className="text-body-sm leading-relaxed text-neutral-warm/50 max-w-xs">
              Where grooming transcends the ordinary. A luxury experience
              crafted for the distinguished.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-luxury text-neutral-warm/40 mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "Gallery", "About", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-body-sm text-neutral-warm/60 hover:text-gold transition-colors duration-500"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-luxury text-neutral-warm/40 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Korean Hydra Facial",
                "Premium Hair Spa",
                "Advanced Haircut",
                "Beard Grooming",
                "Hair Color",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-body-sm text-neutral-warm/60 hover:text-gold transition-colors duration-500"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-luxury text-neutral-warm/40 mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <p className="text-body-sm text-neutral-warm/60">
                Aligarh, Uttar Pradesh
                <br />
                India
              </p>
              <a
                href="tel:+919876543210"
                className="block text-body-sm text-neutral-warm/60 hover:text-gold transition-colors duration-500"
              >
                +91 98765 43210
              </a>
              <a
                href="https://instagram.com/thehairclubaligarh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-body-sm text-neutral-warm/60 hover:text-gold transition-colors duration-500"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @thehairclubaligarh
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-warm/8">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-neutral-warm/30 tracking-[0.15em]">
            © {new Date().getFullYear()} THE HAIR CLUB ALIGARH. ALL RIGHTS
            RESERVED.
          </p>
          <p className="text-caption text-neutral-warm/20 tracking-[0.1em]">
            CRAFTED WITH EXCELLENCE
          </p>
        </div>
      </div>
    </footer>
  );
}