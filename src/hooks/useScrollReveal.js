import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal-up, [data-reveal]";

function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    if (!elements.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    elements.forEach((element, index) => {
      const staggerDelay = (index % 6) * 70;
      element.style.setProperty("--reveal-delay", `${staggerDelay}ms`);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

export default useScrollReveal;
