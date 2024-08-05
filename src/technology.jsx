import Nav from "./components/nav";
import Footer from "./components/footer";

const TechnologyHomepage = () => {
  return (
    <>
      <main className="md:bg-bgTechnologyTablet flex h-screen w-screen flex-col overflow-hidden bg-bgTechnologyMobile bg-cover bg-no-repeat font-barlow text-white lg:bg-bgTechnologyDesktop">
        <Nav />
        <Footer />
      </main>
    </>
  );
};

export default TechnologyHomepage;
