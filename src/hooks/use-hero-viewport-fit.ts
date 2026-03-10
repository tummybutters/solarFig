import * as React from "react";

type UseHeroViewportFitOptions = {
  topGap?: number;
  bottomGap?: number;
  height?: string;
};

export function useHeroViewportFit(options: UseHeroViewportFitOptions = {}) {
  const { topGap = 28, bottomGap = 48, height = "100svh" } = options;
  const [navbarOffset, setNavbarOffset] = React.useState(96);

  React.useLayoutEffect(() => {
    const navbar = document.querySelector<HTMLElement>("[data-site-navbar]");
    if (!navbar) return;

    const updateNavbarOffset = () => {
      setNavbarOffset(Math.round(navbar.getBoundingClientRect().bottom));
    };

    updateNavbarOffset();

    const resizeObserver = new ResizeObserver(() => {
      updateNavbarOffset();
    });

    resizeObserver.observe(navbar);
    window.addEventListener("resize", updateNavbarOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateNavbarOffset);
    };
  }, []);

  return {
    heroMediaStyle: {
      height,
    } as React.CSSProperties,
    heroOverlayStyle: {
      minHeight: "100%",
      paddingTop: `calc(${navbarOffset}px + ${topGap}px)`,
      paddingBottom: `${bottomGap}px`,
      boxSizing: "border-box",
    } as React.CSSProperties,
  };
}

export function useStandardPageHeroFit(options: Omit<UseHeroViewportFitOptions, "height"> = {}) {
  return useHeroViewportFit({
    height: "clamp(500px, 68svh, 720px)",
    topGap: 24,
    bottomGap: 40,
    ...options,
  });
}
