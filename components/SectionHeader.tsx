import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}

export default function SectionHeader({
  label,
  title,
  description,
  light = false,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-16 md:mb-20 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <AnimatedSection delay={0}>
        <p
          className={`label-luxury mb-4 ${
            light ? "text-neutral-warm/40" : "text-taupe"
          }`}
        >
          {label}
        </p>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div
          className={`divider-ornament mb-6 ${
            align === "center" ? "" : "justify-start"
          }`}
        >
          <span
            className={`w-2 h-2 rotate-45 ${
              light ? "bg-gold/40" : "bg-gold/60"
            }`}
          />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <h2
          className={`heading-luxury ${
            light ? "text-neutral-warm" : "text-charcoal"
          } text-heading-2 md:text-heading-1 text-balance max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {title}
        </h2>
      </AnimatedSection>

      {description && (
        <AnimatedSection delay={300}>
          <p
            className={`mt-5 text-body-lg max-w-xl ${
              align === "center" ? "mx-auto" : ""
            } ${light ? "text-neutral-warm/50" : "text-taupe"}`}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}