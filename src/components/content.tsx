import logo from "../assets/shared/logo.svg";
import data from "../assets/shared/data.json";
import menu from "../assets/shared/icon-hamburger.svg";
import { useLocation, Link } from "react-router";
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
      <div className="bg-home-mobile crew:bg-crew-mobile crew:md:bg-crew-tablet crew:lg:bg-crew-desktop md:bg-home-tablet lg:bg-home-desktop technology:bg-technology-mobile technology:md:bg-technology-tablet technology:lg:bg-technology-desktop destinations:bg-destinations-mobile destinations:md:bg-destinations-tablet destinations:lg:bg-destinations-desktop flex min-h-screen flex-col bg-cover bg-no-repeat">
        {children}
      </div>
    </>
  );
};

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-1 flex-col">{children}</div>
    </>
  );
};

export const MobileNav = () => {
  return (
    <>
      <header className="flex items-center justify-between py-6">
        <div className="pl-6">
          <img className="size-10 object-contain" src={logo} alt="logo" />
        </div>
        <div className="flex items-center pr-6">
          <button>
            <img className="h-[1.3125rem] w-6" src={menu} alt="menu" />
          </button>
        </div>
      </header>
    </>
  );
};

export const HomeContent = () => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-between p-6">
        <div className="flex max-w-[20.4375rem] flex-col items-center gap-6 text-center">
          <h2 className="font-barlow-condensed text-light-blue tracking-[0.15rem] uppercase md:text-[1.75rem] md:leading-[32.1%]">
            So, you want to travel to
          </h2>
          <h1 className="font-bellefair text-[5rem] text-white uppercase">
            Space
          </h1>
          <p className="font-barlow text-light-blue h-[8.4375rem] text-[0.9375rem] leading-[180%]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex h-[23.875rem] flex-col items-center justify-center">
          <Link
            to="crew"
            className="font-bellefair text-dark-blue flex size-[9rem] items-center justify-center rounded-full bg-white text-lg uppercase"
          >
            Explore
          </Link>
        </div>
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
