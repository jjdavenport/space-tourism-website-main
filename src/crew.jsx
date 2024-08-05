import Nav from "./components/nav";
import Footer from "./components/footer";

const CrewHomepage = () => {
  return (
    <>
      <main className="md:bg-bgCrewTablet flex h-screen w-screen flex-col overflow-hidden bg-bgCrewMobile bg-cover bg-no-repeat font-barlow text-white lg:bg-bgCrewDesktop">
        <Nav />
        <Footer />
      </main>
    </>
  );
};

export default CrewHomepage;
