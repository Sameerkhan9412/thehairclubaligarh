"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  threshold?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.15,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (direction) {
      case "up":
        return "translate3d(0, 40px, 0) scale(1)";
      case "down":
        return "translate3d(0, -30px, 0) scale(1)";
      case "left":
        return "translate3d(-50px, 0, 0) scale(1)";
      case "right":
        return "translate3d(50px, 0, 0) scale(1)";
      case "scale":
        return "translate3d(0, 0, 0) scale(0.95)";
      case "fade":
        return "translate3d(0, 0, 0) scale(1)";
      default:
        return "translate3d(0, 40px, 0) scale(1)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.9s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms, 
                     transform 0.9s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}