import Nav from "../../components/shared/nav";
import Footer from "../../components/shared/footer";
import DestinationContent from "./destination-content";

const DestinationHomepage = () => {
  return (
    <>
      <div className="md:bg-bgDestinationTablet flex h-full min-h-screen w-screen flex-col justify-between overflow-hidden bg-bgDestinationMobile bg-cover bg-no-repeat font-barlow text-white md:justify-center lg:bg-bgDestinationDesktop">
        <Nav />
        <DestinationContent />
        <Footer />
      </div>
    </>
  );
};

export default DestinationHomepage;
