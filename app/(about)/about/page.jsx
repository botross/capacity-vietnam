import Pagetitle from "@/components/common/Pagetitle";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import About1 from "@/components/homes/home-1/About";
import Process from "@/components/homes/home-1/Process";
import About from "@/components/homes/home-2/About";
import Facts from "@/components/homes/home-2/Facts";
import Testimonials from "@/components/homes/home-2/Testimonials";
import React from "react";
import About2 from "./AboutUs2";
import PageTitle from "@/components/common/Pagetitle";

export default function page() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        <PageTitle
          pageName="About Capacity Vietnam"
          pageDescription="Dedicated to transforming mental health care across Vietnam through compassionate, evidence-based treatment and community support for every individual's journey to wellness."
          overlayImage="/about-us.jpg"
          backgroundPosition="center 35%"
        />
        <About1 />
        <About2 />
        <div style={{
          marginTop:"-140px",
        }}
        />
        <Footer1 />
      </div>
    </>
  );
}
