import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#D8D2C2",
          light: "#E8E4DA",
          dark: "#C8C0AE",
        },
        neutral: {
          DEFAULT: "#F5F3EE",
          warm: "#FAF8F5",
          cool: "#EFEДЕ8",
        },
        charcoal: {
          DEFAULT: "#1C1C1C",
          light: "#2A2A2A",
          muted: "#3D3D3D",
        },
        taupe: {
          DEFAULT: "#A89F91",
          light: "#BEB7AB",
          dark: "#8E8578",
        },
        gold: {
          DEFAULT: "#BFA36F",
          light: "#D4BC8E",
          dark: "#A68B55",
          muted: "rgba(191, 163, 111, 0.15)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["5.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        display: ["4rem", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "heading-1": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-2": ["2.25rem", { lineHeight: "1.2" }],
        "heading-3": ["1.75rem", { lineHeight: "1.3" }],
        "heading-4": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        body: ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      boxShadow: {
        subtle: "0 2px 20px rgba(28, 28, 28, 0.04)",
        card: "0 4px 40px rgba(28, 28, 28, 0.06)",
        elevated: "0 8px 60px rgba(28, 28, 28, 0.08)",
        glow: "0 0 40px rgba(191, 163, 111, 0.12)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-down": "fadeDown 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "line-grow": "lineGrow 1.2s ease-out forwards",
        "counter": "counter 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        counter: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      borderRadius: {
        subtle: "2px",
      },
    },
  },
  plugins: [],
};
export default config;