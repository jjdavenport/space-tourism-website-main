import Nav from "./components/nav";
import Footer from "./components/footer";
import TechnologyContent from "./components/technology-content";

const TechnologyHomepage = ({ desktop }) => {
  return (
    <>
      <div className="flex h-full min-h-screen w-screen flex-col overflow-hidden bg-bgTechnologyMobile bg-cover bg-no-repeat font-barlow text-white md:bg-bgTechnologyTablet lg:bg-bgTechnologyDesktop">
        <Nav />
        <TechnologyContent />
        {desktop && <Footer />}
      </div>
    </>
  );
};

export default TechnologyHomepage;
