import Nav from "./components/nav";
import HomepageContent from "./components/homepage-content";
import Footer from "./components/footer";

const Homepage = () => {
  return (
    <>
      <main className="flex h-screen w-screen flex-col bg-bgHomeMobile bg-cover bg-no-repeat font-barlow text-white md:bg-bgHomeTablet lg:bg-bgHomeDesktop">
        <Nav />
        <HomepageContent />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
