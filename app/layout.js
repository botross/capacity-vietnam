"use client";
import "../public/main.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import BacktoTop from "@/components/common/BacktoTop";
export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    const updateSpacerHeights = () => {
      let mode = "desktop";
      if (window.matchMedia("(max-width: 991px)").matches) mode = "mobile";
      if (window.matchMedia("(max-width: 767px)").matches) mode = "smobile";

      document.querySelectorAll(".themesflat-spacer").forEach((el) => {
        const height =
          mode === "desktop"
            ? el.dataset.desktop
            : mode === "mobile"
              ? el.dataset.mobile
              : el.dataset.smobile;

        el.style.height = `${height}px`;
      });
    };

    window.addEventListener("load", updateSpacerHeights);
    window.addEventListener("resize", updateSpacerHeights);
    updateSpacerHeights();

    return () => {
      window.removeEventListener("load", updateSpacerHeights);
      window.removeEventListener("resize", updateSpacerHeights);
    };
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector("#header.header-style2");
      const hero = document.querySelector("#rev-slider2")
      if (header) {
        if (window.scrollY >= 60) {
          header.classList.add("fixed-header");
          hero.classList.remove("height")
        } else {
          header.classList.remove("fixed-header");
          hero.classList.add("height")
        }
      }
    });
  }, []);
  useEffect(() => {
    const WOW = require("@/utlis/wow");
    const wow = new WOW.default({
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: false,
    });
    wow.init();
  }, [pathname]);
  const metadata = {
    title: "Capacity Vietnam",
    description: "Building awareness of mental health issues Supporting people recovering from mental illness by providing counseling and mental health training for individuals, families, and companies",
  };
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}

        <BacktoTop />
      </body>
    </html>
  );
}
