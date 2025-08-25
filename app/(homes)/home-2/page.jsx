import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import About from "@/components/homes/home-2/About";
import Blogs from "@/components/homes/home-2/Blogs";
import Facts from "@/components/homes/home-2/Facts";
import Hero from "@/components/homes/home-2/Hero";
import Hero2 from "@/components/homes/home-2/Hero2";
import Portfolio from "@/components/homes/home-2/Portfolio";
import Services from "@/components/homes/home-2/Services";
import Services2 from "@/components/homes/home-2/Services2";
import Shop from "@/components/homes/home-2/Shop";
import Testimonials from "@/components/homes/home-2/Testimonials";
import Team from "@/components/otherPages/Team";
import React from "react";
import Services3 from "@/components/homes/home-1/Services";
export default function page() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        {/* <Hero /> */}
        <Hero2 />
        <div className="flat-team">
          <Team />
        </div>
        <div className="flat-why-choose-us">
          <Services />
        </div>
        {/* <Services2 /> */}
        {/* <Services3 /> */}
        {/* <About /> */}
        {/* <Shop /> */}
        {/* <Facts /> */}
          <Portfolio />
        {/* <Testimonials /> */}
        {/* <Blogs /> */}
        <Footer1 />
      </div>
    </>
  );
}
