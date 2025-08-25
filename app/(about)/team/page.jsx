import Pagetitle from "@/components/common/Pagetitle";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import Team from "@/components/otherPages/Team";
import Image from "next/image";

import React from "react";

export default function page() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        <Pagetitle
          pageName="Our Team"
          backgroundImage="/team.jpg"
          overlayImage="/team.jpg"
          backgroundPosition="center 25%"
        />
        <Team />

        <Footer1 />
      </div>
    </>
  );
}
