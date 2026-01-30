const PinkRibbon = () => {
  const ribbonText = "SHORT FORM CONTENT • INFLUENCER MARKETING • SOCIAL MEDIA MANAGEMENT • ";
  const repeatedText = ribbonText.repeat(6);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Left to center curve */}
      <div
        className="absolute"
        style={{
          left: "-10%",
          bottom: "15%",
          width: "60%",
          height: "200px",
          transform: "rotate(-8deg)",
        }}
      >
        <svg
          viewBox="0 0 800 200"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="curveLeft"
              d="M 0 100 Q 200 180 400 150 Q 600 120 800 100"
              fill="none"
            />
          </defs>
          <path
            d="M 0 100 Q 200 180 400 150 Q 600 120 800 100"
            fill="none"
            stroke="#f5a8e0"
            strokeWidth="40"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center"
          style={{
            clipPath:
              "path('M 0 100 Q 200 180 400 150 Q 600 120 800 100 L 800 120 Q 600 140 400 170 Q 200 200 0 120 Z')",
          }}
        >
          <div className="animate-ribbon-scroll whitespace-nowrap flex items-center h-full">
            <span className="text-[#1a1a1a] text-xs font-semibold tracking-wider uppercase px-4">
              {repeatedText}
            </span>
            <span className="text-[#1a1a1a] text-xs font-semibold tracking-wider uppercase px-4">
              {repeatedText}
            </span>
          </div>
        </div>
      </div>

      {/* Right curve */}
      <div
        className="absolute"
        style={{
          right: "-15%",
          top: "35%",
          width: "55%",
          height: "300px",
        }}
      >
        <svg
          viewBox="0 0 600 300"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 150 Q 150 50 300 80 Q 450 110 600 50"
            fill="none"
            stroke="#f5a8e0"
            strokeWidth="40"
            strokeLinecap="round"
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-end"
          style={{
            clipPath:
              "path('M 0 150 Q 150 50 300 80 Q 450 110 600 50 L 600 70 Q 450 130 300 100 Q 150 70 0 170 Z')",
          }}
        >
          <div className="animate-ribbon-scroll whitespace-nowrap flex items-center h-full">
            <span className="text-[#1a1a1a] text-xs font-semibold tracking-wider uppercase px-4">
              {repeatedText}
            </span>
            <span className="text-[#1a1a1a] text-xs font-semibold tracking-wider uppercase px-4">
              {repeatedText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinkRibbon;
