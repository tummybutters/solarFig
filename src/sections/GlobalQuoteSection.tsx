import { useState } from "react";
import type { FormEvent } from "react";
import { FloatingInput } from "@/components/ui/floating-input";

const ghlWebhookUrl =
  import.meta.env.VITE_GHL_WEBHOOK_URL || import.meta.env.VITE_GHL_FORM_ENDPOINT || "";

const GlobalQuoteSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("idle");
    setSubmitMessage("");

    if (!ghlWebhookUrl) {
      setSubmitState("error");
      setSubmitMessage("Lead form endpoint is not configured yet.");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      zipCode: String(data.get("zipCode") ?? "").trim(),
      consent: data.get("consent") === "on",
      source: "solarfig.com",
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    setIsSubmitting(true);
    try {
      const response = await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      setSubmitState("success");
      setSubmitMessage("Thanks. Your quote request was submitted successfully.");
      form.reset();
    } catch {
      setSubmitState("error");
      setSubmitMessage("We couldn't submit your request right now. Please call (213) 306-4154.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#eadff7] py-16 sm:py-20">
      <div className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-purple-200/50" />
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <h2 className="text-4xl tracking-tight text-[#201b25] sm:text-6xl">Talk to a solar expert</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#2d2740]/80">
            Fill out the form, and our team will be in touch with a free quote based on your local incentives and
            payment options.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <FloatingInput label="First Name (Required)" name="firstName" autoComplete="given-name" required />
            <FloatingInput label="Last Name (Required)" name="lastName" autoComplete="family-name" required />
          </div>

          <FloatingInput
            label="Email Address (Required)"
            name="email"
            type="email"
            autoComplete="email"
            required
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <FloatingInput label="Phone Number (Required)" name="phone" type="tel" autoComplete="tel" required />
            <FloatingInput label="Zip Code (Required)" name="zipCode" autoComplete="postal-code" required />
          </div>

          <div className="pt-1">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#231f2a]">
              Consent <span className="text-[#231f2a]/60">(Required)</span>
            </p>
            <label className="solar-neon-checkbox mt-4 inline-flex cursor-pointer items-center gap-3 text-[#231f2a]">
              <input type="checkbox" name="consent" required aria-label="I Agree and Consent" />
              <div className="solar-neon-checkbox__frame" aria-hidden="true">
                <div className="solar-neon-checkbox__box">
                  <div className="solar-neon-checkbox__check-container">
                    <svg viewBox="0 0 24 24" className="solar-neon-checkbox__check">
                      <path d="M3,12.5l7,7L21,5"></path>
                    </svg>
                  </div>
                  <div className="solar-neon-checkbox__glow"></div>
                  <div className="solar-neon-checkbox__borders">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="solar-neon-checkbox__effects">
                  <div className="solar-neon-checkbox__particles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="solar-neon-checkbox__rings">
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                  </div>
                  <div className="solar-neon-checkbox__sparks">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <span>I Agree and Consent</span>
            </label>
            <p className="mt-4 text-sm leading-relaxed text-[#302845]/80">
              By checking this box, you consent to receive calls, texts, and emails from Solarfig regarding your quote.
              Consent is not a condition of purchase. Message and data rates may apply. You can opt out at any time.
              Review our <a href="/terms-of-use" className="underline hover:text-[#6d39b5]">Terms of Service</a> and <a href="/privacy-policy" className="underline hover:text-[#6d39b5]">Privacy Policy</a>.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f1a22] px-10 text-lg font-medium text-white transition-colors hover:bg-[#6d39b5] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Get a quote"}
          </button>

          {submitState !== "idle" ? (
            <p
              className={`text-sm ${
                submitState === "success" ? "text-emerald-700" : "text-red-700"
              }`}
            >
              {submitMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default GlobalQuoteSection;
