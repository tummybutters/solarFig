import { FloatingInput } from "@/components/ui/floating-input";

const GlobalQuoteSection = () => {
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

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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
              <input type="checkbox" required aria-label="I Agree and Consent" />
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
            className="inline-flex h-13 items-center justify-center rounded-full bg-[#1f1a22] px-10 text-lg font-medium text-white transition-colors hover:bg-[#6d39b5]"
          >
            Get a quote
          </button>
        </form>
      </div>
    </section>
  );
};

export default GlobalQuoteSection;
