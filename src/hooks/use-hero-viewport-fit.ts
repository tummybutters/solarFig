import * as React from "react";

type UseHeroViewportFitOptions = {
  topGap?: number;
  bottomGap?: number;
  height?: string;
};

type ResolvedHeroViewportFit = {
  height: string;
  topGap: string;
  bottomGap: string;
};

type HeroViewportVariableSet = {
  height: string;
  topGap: string;
  bottomGap: string;
};

const DEFAULT_FULL_HERO_HEIGHT = "100svh";
const DEFAULT_FULL_TOP_GAP = 28;
const DEFAULT_FULL_BOTTOM_GAP = 48;
const DEFAULT_STANDARD_HERO_HEIGHT = "clamp(500px, 68svh, 720px)";
const DEFAULT_STANDARD_TOP_GAP = 24;
const DEFAULT_STANDARD_BOTTOM_GAP = 40;

function readPxLength(value: string, fallback: number) {
  const trimmed = value.trim();
  const match = trimmed.match(/^(-?\d*\.?\d+)px$/);
  return match ? Number(match[1]) : fallback;
}

function resolveHeroViewportFit(
  options: UseHeroViewportFitOptions,
  variables: HeroViewportVariableSet,
  fallbacks: { height: string; topGap: number; bottomGap: number }
): ResolvedHeroViewportFit {
  if (typeof window === "undefined") {
    return {
      height: options.height ?? fallbacks.height,
      topGap: `${options.topGap ?? fallbacks.topGap}px`,
      bottomGap: `${options.bottomGap ?? fallbacks.bottomGap}px`,
    };
  }

  const styles = window.getComputedStyle(document.documentElement);
  const height = options.height ?? (styles.getPropertyValue(variables.height).trim() || fallbacks.height);
  const topGapValue = options.topGap ?? readPxLength(styles.getPropertyValue(variables.topGap), fallbacks.topGap);
  const bottomGapValue = options.bottomGap ?? readPxLength(styles.getPropertyValue(variables.bottomGap), fallbacks.bottomGap);

  return {
    height,
    topGap: `${topGapValue}px`,
    bottomGap: `${bottomGapValue}px`,
  };
}

export function useHeroViewportFit(options: UseHeroViewportFitOptions = {}) {
  const [navbarOffset, setNavbarOffset] = React.useState(96);
  const variables = React.useMemo<HeroViewportVariableSet>(
    () => ({
      height: "--hero-full-height",
      topGap: "--hero-full-top-gap",
      bottomGap: "--hero-full-bottom-gap",
    }),
    []
  );
  const fallbacks = React.useMemo(
    () => ({
      height: DEFAULT_FULL_HERO_HEIGHT,
      topGap: DEFAULT_FULL_TOP_GAP,
      bottomGap: DEFAULT_FULL_BOTTOM_GAP,
    }),
    []
  );
  const [resolved, setResolved] = React.useState<ResolvedHeroViewportFit>(() => resolveHeroViewportFit(options, variables, fallbacks));

  React.useLayoutEffect(() => {
    const navbar = document.querySelector<HTMLElement>("[data-site-navbar]");
    const updateHeroViewportFit = () => {
      setResolved((current) => {
        const next = resolveHeroViewportFit(options, variables, fallbacks);
        return current.height === next.height && current.topGap === next.topGap && current.bottomGap === next.bottomGap
          ? current
          : next;
      });

      if (navbar) {
        setNavbarOffset(Math.round(navbar.getBoundingClientRect().bottom));
      }
    };

    updateHeroViewportFit();

    const resizeObserver = new ResizeObserver(() => {
      updateHeroViewportFit();
    });

    if (navbar) {
      resizeObserver.observe(navbar);
    }
    window.addEventListener("resize", updateHeroViewportFit);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeroViewportFit);
    };
  }, [fallbacks, options.height, options.topGap, options.bottomGap, variables]);

  return {
    heroMediaStyle: {
      height: resolved.height,
    } as React.CSSProperties,
    heroOverlayStyle: {
      minHeight: "100%",
      paddingTop: `calc(${navbarOffset}px + ${resolved.topGap})`,
      paddingBottom: resolved.bottomGap,
      boxSizing: "border-box",
    } as React.CSSProperties,
  };
}

export function useStandardPageHeroFit(options: Omit<UseHeroViewportFitOptions, "height"> = {}) {
  const [navbarOffset, setNavbarOffset] = React.useState(96);
  const variables = React.useMemo<HeroViewportVariableSet>(
    () => ({
      height: "--hero-standard-height",
      topGap: "--hero-standard-top-gap",
      bottomGap: "--hero-standard-bottom-gap",
    }),
    []
  );
  const fallbacks = React.useMemo(
    () => ({
      height: DEFAULT_STANDARD_HERO_HEIGHT,
      topGap: DEFAULT_STANDARD_TOP_GAP,
      bottomGap: DEFAULT_STANDARD_BOTTOM_GAP,
    }),
    []
  );
  const [resolved, setResolved] = React.useState<ResolvedHeroViewportFit>(() =>
    resolveHeroViewportFit(options, variables, fallbacks)
  );

  React.useLayoutEffect(() => {
    const navbar = document.querySelector<HTMLElement>("[data-site-navbar]");
    const updateHeroViewportFit = () => {
      setResolved((current) => {
        const next = resolveHeroViewportFit(options, variables, fallbacks);
        return current.height === next.height && current.topGap === next.topGap && current.bottomGap === next.bottomGap
          ? current
          : next;
      });

      if (navbar) {
        setNavbarOffset(Math.round(navbar.getBoundingClientRect().bottom));
      }
    };

    updateHeroViewportFit();

    const resizeObserver = new ResizeObserver(() => {
      updateHeroViewportFit();
    });

    if (navbar) {
      resizeObserver.observe(navbar);
    }
    window.addEventListener("resize", updateHeroViewportFit);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeroViewportFit);
    };
  }, [fallbacks, options.bottomGap, options.topGap, variables]);

  return {
    heroMediaStyle: {
      height: resolved.height,
    } as React.CSSProperties,
    heroOverlayStyle: {
      minHeight: "100%",
      paddingTop: `calc(${navbarOffset}px + ${resolved.topGap})`,
      paddingBottom: resolved.bottomGap,
      boxSizing: "border-box",
    } as React.CSSProperties,
  };
}
