import logo from "../assets/shared/logo.svg";
import data from "../assets/shared/data.json";
import menu from "../assets/shared/icon-hamburger.svg";
import { useLocation } from "react-router";
import { useEffect } from "react";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("crew", "technology", "destinations");

    switch (path) {
      case "/crew":
        root.classList.add("crew");
        break;
      case "/technology":
        root.classList.add("technology");
        break;
      case "/destinations":
        root.classList.add("destinations");
        break;
    }

    return () => {
      root.classList.remove("crew", "technology", "destinations");
    };
  }, [path]);

  return (
    <>
      <div className="bg-home-mobile crew:bg-crew-mobile crew:md:bg-crew-tablet crew:lg:bg-crew-desktop md:bg-home-tablet lg:bg-home-desktop technology:bg-technology-mobile technology:md:bg-technology-tablet technology:lg:bg-technology-desktop destinations:bg-destinations-mobile destinations:md:bg-destinations-tablet destinations:lg:bg-destinations-desktop h-screen bg-no-repeat">
        {children}
      </div>
    </>
  );
};

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export const MobileNav = () => {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <button>
          <img src={menu} alt="menu" />
        </button>
      </header>
    </>
  );
};

export const HomeContent = () => {
  return (
    <>
      <div>
        <div>
          <h1> So, you want to travel to Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button> Explore</button>
      </div>
    </>
  );
};

export const DestinationContent = () => {
  return (
    <>
      <div>
        <span>01 Pick your Destination</span>
        <img src={data.destinations[0].images.webp} alt="moon" />
        {data.destinations.map((i, index) => (
          <span key={index}>{i.name}</span>
        ))}
        <span>{data.destinations[0].name}</span>
        <p>{data.destinations[0].description}</p>
        <div>
          <div>
            <span> Avg. distance</span>
            <span>{data.destinations[0].distance}</span>
          </div>
          <div>
            <span>Est travel time</span>
            <span>{data.destinations[0].travel}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export const CrewContent = () => {
  return (
    <>
      <div>
        <span>02 Meet your crew</span>
        <span>{data.crew[0].role}</span>
        <span>{data.crew[0].name}</span>
        <p>{data.crew[0].bio}</p>
        {Array.from({ length: 4 }).map((_, i) => (
          <button key={i}></button>
        ))}
        <img src={data.crew[0].images.webp} alt={data.crew[0].name} />
      </div>
    </>
  );
};

export const TechnologyContent = () => {
  return (
    <>
      <div>
        <span>03 Space launch 101</span>
        <img
          src={data.technology[0].images.portrait}
          alt={data.technology[0].name}
        />
        {Array.from({ length: 3 }).map((_, i) => (
          <button key={i}>{i + 1}</button>
        ))}
        <span>The terminology ...</span>
        <span>{data.technology[0].name}</span>
        <p>{data.technology[0].description}</p>
      </div>
    </>
  );
};
