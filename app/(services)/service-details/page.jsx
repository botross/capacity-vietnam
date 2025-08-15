import Pagetitle from "@/components/common/Pagetitle";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import ServiceDetails from "@/components/otherPages/ServiceDetails";
import React from "react";

export default function page() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        <Pagetitle pageName="Service Details" />
        <ServiceDetails />

        <Footer1 />
      </div>
    </>
  );
}
