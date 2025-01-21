import Nav from "../../components/shared/nav";
import CrewContent from "./crew-content";

const CrewHomepage = () => {
  return (
    <>
      <div className="flex h-full min-h-screen w-screen flex-col overflow-hidden bg-bgCrewMobile bg-cover bg-no-repeat font-barlow text-white md:bg-bgCrewTablet lg:bg-bgCrewDesktop">
        <Nav />
        <CrewContent />
      </div>
    </>
  );
};

export default CrewHomepage;
