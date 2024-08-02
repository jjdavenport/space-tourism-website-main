import "./App.css";
import HomepageContent from "./components/homepage-content";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <main className="bg-bgHomeMobile md:bg-bgHomeTablet xl:bg-bgHomeDesktop font-barlow flex h-screen w-screen flex-col bg-cover bg-no-repeat text-white">
        <Nav />
        <HomepageContent />
      </main>
    </>
  );
}

export default App;
