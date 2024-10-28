import Nav from "./components/nav";
import HomepageContent from "./components/homepage-content";
import Footer from "./components/footer";

const Homepage = () => {
  return (
    <>
      <div className="flex h-full min-h-screen w-screen flex-col bg-bgHomeMobile bg-cover bg-no-repeat font-barlow text-white md:items-center md:bg-bgHomeTablet lg:bg-bgHomeDesktop">
        <Nav />
        <HomepageContent />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
