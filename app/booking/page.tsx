"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { submitBooking, BookingFormState } from "@/app/actions";
import { services } from "@/lib/data";

const initialState: BookingFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`btn-primary w-full sm:w-auto relative overflow-hidden ${
        pending ? "opacity-70 cursor-wait" : ""
      }`}
    >
      {pending ? (
        <span className="flex items-center gap-3">
          <svg
            className="w-4 h-4 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Booking...
        </span>
      ) : (
        "Confirm Booking"
      )}
    </button>
  );
}

function BookingFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";
  const [state, formAction] = useFormState(submitBooking, initialState);

  if (state.success) {
    return (
      <AnimatedSection>
        <div className="text-center py-20 md:py-24">
          <div className="w-20 h-20 border border-gold/40 rotate-45 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-8 h-8 text-gold -rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="heading-luxury text-heading-2 mb-4">
            Booking Confirmed
          </h2>
          <p className="text-body-lg text-taupe max-w-md mx-auto mb-8">
            {state.message}
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <form action={formAction} className="max-w-2xl mx-auto">
      <div className="space-y-10">
        {/* Name */}
        <AnimatedSection delay={100}>
          <div>
            <label className="label-luxury mb-3 block">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input-luxury"
              required
            />
            {state.errors?.name && (
              <p className="text-red-500/80 text-body-sm mt-2">
                {state.errors.name}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Phone */}
        <AnimatedSection delay={200}>
          <div>
            <label className="label-luxury mb-3 block">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="10-digit mobile number"
              className="input-luxury"
              required
            />
            {state.errors?.phone && (
              <p className="text-red-500/80 text-body-sm mt-2">
                {state.errors.phone}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Service */}
        <AnimatedSection delay={300}>
          <div className="relative">
            <label className="label-luxury mb-3 block">
              Select Service
            </label>
            <select
              name="service"
              defaultValue={preselectedService}
              className="select-luxury"
              required
            >
              <option value="">Choose a service</option>
              <option value="Male Special ₹1999">
                ★ Male Special — ₹1,999 (Any 5 Services)
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name} — {s.price}
                </option>
              ))}
            </select>
            <div className="absolute right-0 bottom-4 pointer-events-none">
              <svg
                className="w-4 h-4 text-taupe"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {state.errors?.service && (
              <p className="text-red-500/80 text-body-sm mt-2">
                {state.errors.service}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Date & Time */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <label className="label-luxury mb-3 block">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                min={new Date().toISOString().split("T")[0]}
                className="input-luxury"
                required
              />
              {state.errors?.date && (
                <p className="text-red-500/80 text-body-sm mt-2">
                  {state.errors.date}
                </p>
              )}
            </div>
            <div>
              <label className="label-luxury mb-3 block">
                Preferred Time
              </label>
              <select name="time" className="select-luxury" required>
                <option value="">Select time</option>
                {[
                  "10:00 AM",
                  "11:00 AM",
                  "12:00 PM",
                  "01:00 PM",
                  "02:00 PM",
                  "03:00 PM",
                  "04:00 PM",
                  "05:00 PM",
                  "06:00 PM",
                  "07:00 PM",
                  "08:00 PM",
                ].map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {state.errors?.time && (
                <p className="text-red-500/80 text-body-sm mt-2">
                  {state.errors.time}
                </p>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Message */}
        <AnimatedSection delay={500}>
          <div>
            <label className="label-luxury mb-3 block">
              Additional Message{" "}
              <span className="normal-case tracking-normal text-taupe/40">
                (Optional)
              </span>
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Any special requests or preferences..."
              className="input-luxury resize-none"
            />
          </div>
        </AnimatedSection>

        {/* Advance Payment Option */}
        <AnimatedSection delay={600}>
          <div className="bg-gold/5 border border-gold/20 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <input
                type="checkbox"
                name="advancePayment"
                id="advancePayment"
                className="mt-1 w-4 h-4 accent-gold cursor-pointer"
              />
              <div>
                <label
                  htmlFor="advancePayment"
                  className="font-serif text-heading-4 text-charcoal cursor-pointer"
                >
                  Pay ₹200 Advance
                </label>
                <p className="text-body-sm text-taupe/70 mt-1">
                  Secure your slot with a small advance payment. Deducted
                  from your final bill. Priority booking guaranteed.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Error message */}
        {state.message && !state.success && (
          <AnimatedSection>
            <div className="bg-red-50 border border-red-200/50 p-4 text-center">
              <p className="text-body-sm text-red-600/80">{state.message}</p>
            </div>
          </AnimatedSection>
        )}

        {/* Submit */}
        <AnimatedSection delay={700}>
          <div className="pt-4">
            <SubmitButton />
          </div>
        </AnimatedSection>
      </div>
    </form>
  );
}

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-34 pb-16 md:pt-38 md:pb-20 bg-neutral-warm section-bg-pattern">
        <div className="container-luxury text-center">
          <AnimatedSection>
            <p className="label-luxury mb-4">Appointment</p>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="heading-luxury text-heading-1 md:text-display mb-6">
              Book Your Visit
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-body-lg text-taupe max-w-lg mx-auto">
              Reserve your premium grooming session. We&apos;ll confirm your
              appointment via WhatsApp within minutes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="container-luxury">
          <Suspense
            fallback={
              <div className="text-center py-20">
                <p className="text-taupe">Loading booking form...</p>
              </div>
            }
          >
            <BookingFormInner />
          </Suspense>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 md:py-20 bg-cream/30">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "◈",
                title: "Instant Confirmation",
                desc: "Receive booking confirmation on WhatsApp within 5 minutes.",
              },
              {
                icon: "◇",
                title: "Flexible Rescheduling",
                desc: "Reschedule or cancel up to 2 hours before your appointment.",
              },
              {
                icon: "✦",
                title: "Priority Access",
                desc: "Advance payment members get priority slots and exclusive perks.",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="text-center">
                  <span className="text-2xl text-gold mb-4 block">
                    {item.icon}
                  </span>
                  <h3 className="font-serif text-heading-4 text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-taupe">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}