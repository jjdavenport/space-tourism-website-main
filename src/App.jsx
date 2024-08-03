import "./App.css";
import HomepageContent from "./components/homepage-content";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <main className="flex h-screen flex-col bg-bgHomeMobile bg-cover bg-no-repeat font-barlow text-white md:bg-bgHomeTablet lg:bg-bgHomeDesktop">
        <Nav />
        <HomepageContent />
      </main>
    </>
  );
}

export default App;
