import { useState } from "react";
import type { FormEvent } from "react";
import { FloatingInput } from "@/components/ui/floating-input";
import { submitLeadForm } from "@/lib/lead-form";
import SmsConsentFields from "@/components/SmsConsentFields";

type GlobalQuoteSectionMode = "quote" | "referral";

type GlobalQuoteSectionProps = {
  mode?: GlobalQuoteSectionMode;
};

const copyByMode: Record<
  GlobalQuoteSectionMode,
  {
    heading: string;
    description: string;
    submitLabel: string;
    successMessage: string;
    source: string;
    detailsLabel?: string;
    detailsPlaceholder?: string;
  }
> = {
  quote: {
    heading: "Start your solar plan",
    description:
      "Fill out the form, and we'll prepare a customized solar proposal built around your energy usage, local incentives, and long-term savings goals.",
    submitLabel: "Get a quote",
    successMessage: "Thanks. Your quote request was submitted successfully.",
    source: "solarfig.com",
  },
  referral: {
    heading: "Submit a referral",
    description:
      "Share your details and the homeowner's project info. We'll reach out professionally, keep you updated, and confirm your reward after completion.",
    submitLabel: "Submit referral",
    successMessage: "Thanks. Your referral was submitted successfully.",
    source: "solarfig.com/referrals",
    detailsLabel: "Referral details (Required)",
    detailsPlaceholder: "Include homeowner name, city, and best phone/email to reach them.",
  },
};

const GlobalQuoteSection = ({ mode = "quote" }: GlobalQuoteSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const copy = copyByMode[mode];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("idle");
    setSubmitMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      zipCode: String(data.get("zipCode") ?? "").trim(),
      intent: mode,
      referralDetails: String(data.get("referralDetails") ?? "").trim(),
      transactionalConsent: data.get("transactionalConsent") === "on",
      marketingConsent: data.get("marketingConsent") === "on",
      source: copy.source,
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    setIsSubmitting(true);
    try {
      await submitLeadForm(payload);
      setSubmitState("success");
      setSubmitMessage(copy.successMessage);
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
      <div className="pointer-events-none absolute -bottom-36 -left-20 hidden h-80 w-80 rounded-full bg-purple-200/50 sm:block" />
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <h2 className="text-4xl tracking-tight text-[#201b25] sm:text-6xl">{copy.heading}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#2d2740]/80">
            {copy.description}
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
            <FloatingInput label="Phone Number" name="phone" type="tel" autoComplete="tel" />
            <FloatingInput label="Zip Code (Required)" name="zipCode" autoComplete="postal-code" required />
          </div>

          {mode === "referral" ? (
            <div>
              <label className="mb-2 block text-sm font-medium text-[#231f2a]">{copy.detailsLabel}</label>
              <textarea
                name="referralDetails"
                required
                rows={4}
                className="w-full rounded-xl border border-[#cdbde4] bg-white px-4 py-3 text-sm text-[#231f2a] outline-none transition-colors placeholder:text-[#6f6482]/70 focus:border-[#6d39b5]"
                placeholder={copy.detailsPlaceholder}
              />
            </div>
          ) : null}

          <SmsConsentFields
            idPrefix={`global-quote-${mode}`}
            className="pt-1"
            textClassName="text-[#302845]/80"
          />

          <p className="text-center text-xs leading-relaxed text-[#302845]/80">
            Review our{" "}
            <a href="/terms-of-use" className="underline underline-offset-2 hover:text-[#6d39b5]">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" className="underline underline-offset-2 hover:text-[#6d39b5]">
              Privacy Policy
            </a>
            .
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#6d39b5] px-10 text-lg font-medium text-white transition-colors hover:bg-[#8553c2] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : copy.submitLabel}
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
