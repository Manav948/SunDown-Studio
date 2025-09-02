import React, { useEffect } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "Play New Kidvision",
    brand: "NIKE",
    img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
  },
  {
    title: "SOHO NYC",
    brand: "ARC'TERYX",
    img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp",
  },
  {
    title: "Makers Studio HOI",
    brand: "NIKE",
    img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp",
  },
  {
    title: "SOHO 2023",
    brand: "CONVERSE",
    img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg",
  },
  {
    title: "NYFW Popup",
    brand: "AFTERPAY",
    img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1712_AM704009-p-1600.webp",
  },
  {
    title: "Air Force 1 2021",
    brand: "NIKE",
    img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp",
  },
  {
    title: "50th Anniversary",
    brand: "NIKE",
    img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp",
  },
];

const HoverProjects = () => {
  useEffect(() => {
    projects.forEach((_, i) => {
      const card = document.getElementById(`card-${i}`);
      const row = document.getElementById(`row-${i}`);

      if (!card || !row) return;

      const xMove = gsap.quickTo(card, "x", { duration: 0.3, ease: "power3.out" });
      const yMove = gsap.quickTo(card, "y", { duration: 0.3, ease: "power3.out" });

      const moveCard = (e) => {
        xMove(e.clientX + 20); // offset to right of cursor
        yMove(e.clientY - 50); // slightly above cursor
      };

      row.addEventListener("mouseenter", () => {
        gsap.to(card, { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" });
        window.addEventListener("mousemove", moveCard);
      });

      row.addEventListener("mouseleave", () => {
        gsap.to(card, { opacity: 0, scale: 0.8, duration: 0.5, ease: "power3.inOut" });
        window.removeEventListener("mousemove", moveCard);
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen space-y-10 relative">
      {projects.map((proj, i) => (
        <div
          key={i}
          id={`row-${i}`}
          className="group relative flex items-center justify-between px-10 py-6 cursor-pointer"
        >
          {/* Text */}
          <h1 className="text-5xl font-bold z-10">{proj.title}</h1>
          <p className="z-10">{proj.brand}</p>

          {/* Floating Card */}
          <div
            id={`card-${i}`}
            className="fixed top-0 left-0 pointer-events-none opacity-0 z-50"
            style={{
              width: "400px",
              height: "500px",
              transform: "scale(0.8)", 
              transformOrigin: "top left",
            }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
              {/* Orange overlay */}
              <div className="absolute inset-0 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverProjects;
