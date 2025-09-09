import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import CounsellingHero from "@/components/counselling/CounsellingHero";
import ServiceDetails from "@/components/otherPages/ServiceDetails";
import React from "react";
import CTA from "@/app/(about)/about/CTA";
import Team from "@/components/otherPages/Team";

export default function page() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        <CounsellingHero />
        <ServiceDetails />


        <CTA />
        <Team />
        <Footer1 />
      </div>
    </>
  );
}
