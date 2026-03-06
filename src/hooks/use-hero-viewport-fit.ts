import * as React from "react";

type UseHeroViewportFitOptions = {
  topGap?: number;
  bottomGap?: number;
};

export function useHeroViewportFit(options: UseHeroViewportFitOptions = {}) {
  const { topGap = 28, bottomGap = 48 } = options;
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
      height: "100svh",
    } as React.CSSProperties,
    heroOverlayStyle: {
      minHeight: "100%",
      paddingTop: `calc(${navbarOffset}px + ${topGap}px)`,
      paddingBottom: `${bottomGap}px`,
      boxSizing: "border-box",
    } as React.CSSProperties,
  };
}
