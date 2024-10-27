import Nav from "./components/nav";
import Footer from "./components/footer";
import TechnologyContent from "./components/technology-content";

const TechnologyHomepage = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col overflow-hidden bg-bgTechnologyMobile bg-cover bg-no-repeat font-barlow text-white md:bg-bgTechnologyTablet lg:bg-bgTechnologyDesktop">
        <Nav />
        <TechnologyContent />
        <Footer />
      </div>
    </>
  );
};

export default TechnologyHomepage;
