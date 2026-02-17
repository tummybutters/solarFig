const lenderLogos = [
  { name: "GoodLeap", src: "/assets/lender-logos/goodleap.png", monochrome: true },
  { name: "LightReach", src: "/assets/lender-logos/lightreach.png", monochrome: true },
  { name: "EnFin", src: "/assets/lender-logos/enfin.png", monochrome: true },
  { name: "Dividend", src: "/assets/lender-logos/dividend.png", monochrome: true },
  { name: "Participate Energy", src: "/assets/lender-logos/participate-energy.png", monochrome: true },
  { name: "Propel", src: "/assets/lender-logos/propel.svg", monochrome: true },
  { name: "Concert Finance", src: "/assets/lender-logos/concert-finance.svg", monochrome: true },
  { name: "Sunrun", src: "/assets/lender-logos/raw/sunrun.png", monochrome: false },
  { name: "Wheelhouse", src: "/assets/lender-logos/wheelhouse.png", monochrome: true },
  { name: "Credit Human", src: "/assets/lender-logos/credit-human.svg", monochrome: false },
];

const LogoScroll = () => {
  const looped = [...lenderLogos, ...lenderLogos];

  return (
    <section className="w-full overflow-hidden bg-gray-50 py-7">
      <div className="mx-auto mb-4 max-w-[1400px] px-6 sm:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500">
          Trusted Lending Partners
        </p>
      </div>
      <div className="overflow-hidden">
        <div
          className="animate-ribbon-scroll flex w-max items-center gap-6 pr-6"
          style={{ animationDuration: "34s" }}
        >
          {looped.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-16 w-[190px] shrink-0 items-center justify-center px-2"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className={`h-9 w-auto max-w-[170px] object-contain ${logo.monochrome ? "brightness-0 grayscale" : ""}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoScroll;
