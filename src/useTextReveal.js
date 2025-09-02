import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useTextReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("span, p, h1, h2, h3");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // when element enters viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
}
