import Nav from "./components/nav";
import CrewContent from "./components/crew-content";
import Footer from "./components/footer";

const CrewHomepage = () => {
  return (
    <>
      <div className="flex h-full min-h-screen w-screen flex-col overflow-hidden bg-bgCrewMobile bg-cover bg-no-repeat font-barlow text-white md:bg-bgCrewTablet lg:bg-bgCrewDesktop">
        <Nav />
        <CrewContent />
        <Footer />
      </div>
    </>
  );
};

export default CrewHomepage;
