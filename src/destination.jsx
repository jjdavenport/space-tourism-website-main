import Nav from "./components/nav";
import Footer from "./components/footer";

const DestinationHomepage = () => {
  return (
    <>
      <main className="md:bg-bgDestinationTablet flex h-screen w-screen flex-col overflow-hidden bg-bgDestinationMobile bg-cover bg-no-repeat font-barlow text-white lg:bg-bgDestinationDesktop">
        <Nav />
        <Footer />
      </main>
    </>
  );
};

export default DestinationHomepage;
