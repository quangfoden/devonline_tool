import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  /* Fade up */
  gsap.utils.toArray(".gsap-fade-up").forEach(el => {
    gsap.from(el, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      }
    });
  });

  /* Fade left */
  gsap.utils.toArray(".gsap-fade-left").forEach(el => {
    gsap.from(el, {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      }
    });
  });

  /* Fade right */
  gsap.utils.toArray(".gsap-fade-right").forEach(el => {
    gsap.from(el, {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      }
    });
  });

  /* Zoom in */
  gsap.utils.toArray(".gsap-zoom").forEach(el => {
    gsap.from(el, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      }
    });
  });

  // Stagger cards
  gsap.utils.toArray(".gsap-stagger").forEach(container => {
    gsap.from(container.children, {
      opacity: 0,
      y: 50,
      scale: 0.96,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
      }
    });
  });
}
