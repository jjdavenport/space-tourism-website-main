import Nav from "./components/nav";
import Footer from "./components/footer";
import CrewContent from "./components/crew-content";

const CrewHomepage = () => {
  return (
    <>
      <main className="flex h-screen w-screen flex-col bg-bgCrewMobile bg-cover bg-no-repeat font-barlow text-white md:bg-bgCrewTablet lg:bg-bgCrewDesktop">
        <Nav />
        <CrewContent />
      </main>
    </>
  );
};

export default CrewHomepage;
