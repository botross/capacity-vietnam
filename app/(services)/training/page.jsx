import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import TrainingHero from "@/components/training/TrainingHero";
import WorkplaceSolutions from "@/components/training/WorkplaceSolutions";
import ManagerTraining from "@/components/training/ManagerTraining";
import EmployeeTraining from "@/components/training/EmployeeTraining";
import PsychologicalSupport from "@/components/training/PsychologicalSupport";
import ExpertTeam from "@/components/training/ExpertTeam";
import React from "react";
import CTA from "@/app/(about)/about/CTA";

export default function page() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        <TrainingHero />
        <WorkplaceSolutions />
        <CTA />
        {/* <ManagerTraining /> */}
        {/* <EmployeeTraining /> */}
        {/* <PsychologicalSupport /> */}
        <ExpertTeam />
        <div 
        style={{
          marginBottom:"-100px"
        }}
        />
        <Footer1 />
      </div>
    </>
  );
}
