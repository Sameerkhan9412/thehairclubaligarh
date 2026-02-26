"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury ${
          scrolled
            ? "bg-neutral-warm/92 backdrop-blur-xl shadow-subtle py-3"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <div className="flex flex-col items-start">
              <span
                className={`font-serif text-lg md:text-xl tracking-[0.15em] transition-colors duration-500 ${
                  mobileOpen ? "text-neutral-warm" : "text-charcoal"
                }`}
              >
                THE HAIR CLUB
              </span>
              <span
                className={`text-caption tracking-[0.3em] transition-colors duration-500 ${
                  mobileOpen ? "text-gold-light" : "text-gold"
                }`}
              >
                ALIGARH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-body-sm tracking-[0.08em] uppercase transition-colors duration-500
                  ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-charcoal-muted hover:text-charcoal"
                  }
                `}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ease-luxury ${
                    pathname === link.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/booking"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-3
                       bg-charcoal text-neutral-warm font-sans text-body-sm
                       tracking-[0.1em] uppercase
                       transition-all duration-500 ease-luxury
                       hover:bg-gold hover:shadow-glow"
          >
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px transition-all duration-500 ${
                mobileOpen
                  ? "bg-neutral-warm rotate-45 translate-y-[3.5px]"
                  : "bg-charcoal"
              }`}
            />
            <span
              className={`block w-6 h-px transition-all duration-500 ${
                mobileOpen
                  ? "bg-neutral-warm -rotate-45 -translate-y-[3.5px]"
                  : "bg-charcoal"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal transition-all duration-700 ease-luxury lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-serif text-heading-3 text-neutral-warm/80 
                         tracking-[0.1em] transition-all duration-500
                         hover:text-gold
                         ${pathname === link.href ? "text-gold" : ""}
              `}
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: `all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${
                  mobileOpen ? 200 + i * 80 : 0
                }ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="mt-4 btn-outline-gold"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) ${
                mobileOpen ? 700 : 0
              }ms`,
            }}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}