import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import ManagerTraining from "@/components/training/ManagerTraining";
import EmployeeTraining from "@/components/training/EmployeeTraining";
import PsychologicalSupport from "@/components/training/PsychologicalSupport";
import ExpertTeam from "@/components/training/ExpertTeam";

export default function Page({ params }) {
  const id = Number(params.id);

  const renderContent = () => {
    switch (id) {
      case 1:
        return <ManagerTraining />;
      case 2:
        return <EmployeeTraining />;
      case 3:
        return <PsychologicalSupport />;
      case 4:
        return <ExpertTeam />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        {renderContent()}
        <Footer1 />
      </div>
    </>
  );
}


