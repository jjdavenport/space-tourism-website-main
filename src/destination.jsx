import Nav from "./components/nav";
import Footer from "./components/footer";
import DestinationContent from "./components/destination-content";

const DestinationHomepage = () => {
  return (
    <>
      <main className="md:bg-bgDestinationTablet flex h-screen w-screen flex-col bg-bgDestinationMobile bg-cover bg-no-repeat font-barlow text-white lg:bg-bgDestinationDesktop">
        <Nav />
        <DestinationContent />
        <Footer />
      </main>
    </>
  );
};

export default DestinationHomepage;
