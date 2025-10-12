import logo from "../assets/shared/logo.svg";
import data from "../assets/shared/data.json";
import menu from "../assets/shared/icon-hamburger.svg";
import { useLocation, Link } from "react-router";
import { useEffect, useState } from "react";

export const Footer = () => {
  return (
    <footer className="text-center text-xs text-white">
      Challenge by
      <a
        className="pl-1 underline"
        href="https://www.frontendmentor.io?ref=challenge"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a className="pl-1 underline" href="https://github.com/jjdavenport">
        jjdavenport
      </a>
      .
    </footer>
  );
};

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

export const TabletNav = () => {
  const [state, setState] = useState<string>("");

  const location = useLocation();
  const path = location.pathname.split("/")[1];

  useEffect(() => {
    setState(path);
  }, [path]);

  return (
    <>
      <header className="flex h-[6rem] justify-between gap-16">
        <div className="flex items-center pl-10">
          <img className="size-12 object-contain" src={logo} alt="logo" />
        </div>
        <nav className="flex w-full gap-12 bg-white/5 px-10">
          <TabletLink path="" text="Home" state={state} />
          <TabletLink
            path="destinations"
            text="Destination"
            number="01"
            state={state}
          />
          <TabletLink path="crew" text="Crew" number="02" state={state} />
          <TabletLink
            path="technology"
            text="Technology"
            number="03"
            state={state}
          />
        </nav>
      </header>
    </>
  );
};

const TabletLink = ({
  path,
  text,
  number,
  state,
}: {
  path: string;
  text: string;
  number?: string;
  state: string;
}) => {
  return (
    <>
      <Link
        className={`${state === path ? "border-b-white" : "border-b-transparent"} flex items-center gap-3 border-b-2`}
        to={path}
      >
        <span className="font-barlow-condensed font-bold tracking-[0.1688rem] text-white uppercase">
          {number}
        </span>
        <span className="font-barlow-condensed tracking-[0.125rem] text-white uppercase">
          {text}
        </span>
      </Link>
    </>
  );
};

export const HomeContent = () => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-between p-6 md:gap-12 md:px-10 md:py-32">
        <div className="flex max-w-[20.4375rem] flex-col items-center gap-6 text-center md:max-w-xl">
          <h2 className="font-barlow-condensed text-light-blue tracking-[0.15em] uppercase md:text-[1.75rem] md:leading-[32.1%] md:tracking-[0.25em]">
            So, you want to travel to
          </h2>
          <h1 className="font-bellefair text-[5rem] text-white uppercase md:text-[9rem]">
            Space
          </h1>
          <p className="font-barlow text-light-blue h-[8.4375rem] text-[0.9375rem] leading-[180%] md:text-base">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex h-[23.875rem] flex-col items-center justify-center md:h-auto">
          <Link
            to="crew"
            className="font-bellefair text-dark-blue flex size-[9rem] items-center justify-center rounded-full bg-white text-lg text-[2rem] uppercase md:size-[17rem]"
          >
            Explore
          </Link>
        </div>
      </div>
    </>
  );
};

export const DestinationsContent = () => {
  const [state, setState] = useState<string>("Moon");

  const handleClick = (text: string) => {
    setState(text);
  };

  return (
    <>
      <div className="flex justify-center p-6 md:p-10">
        <div className="flex max-w-[20.4375rem] flex-col gap-6 md:max-w-screen">
          <div className="flex justify-center gap-6 md:justify-normal">
            <span className="font-barlow-condensed font-bold tracking-[0.15em] text-white/25 md:text-xl">
              01
            </span>
            <span className="font-barlow-condensed tracking-[0.15em] text-white uppercase md:text-xl">
              Pick your Destination
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex h-[12.6875rem] items-center justify-center md:h-[24rem]">
              <img
                className="size-36 md:size-[18.75rem]"
                src={data.destinations[0].images.webp}
                alt="moon"
              />
            </div>
            <div className="flex flex-col gap-6 md:max-w-[32.125rem] md:gap-10">
              <ul className="flex justify-center gap-6">
                {data.destinations.map((i, index) => (
                  <li>
                    <button
                      onClick={() => handleClick(i.name)}
                      className={`${state === i.name ? "border-white text-white" : "text-light-blue border-transparent"} font-barlow-condensed border-b-2 pb-[0.6875rem] text-sm text-[0.9375rem] tracking-[0.1313rem] uppercase md:text-base md:tracking-[0.125rem]`}
                      key={index}
                    >
                      {i.name}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="font-bellefair text-[3.5rem] text-white uppercase md:text-[5rem]">
                  {data.destinations[0].name}
                </span>
                <p className="font-barlow text-light-blue h-[8.4375rem] text-[0.9375rem] leading-[180%] md:h-[5.4375rem] md:text-base">
                  {data.destinations[0].description}
                </p>
              </div>
              <div className="h-[0.0625rem] w-full bg-white/25"></div>
              <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center">
                <div className="flex flex-col gap-3">
                  <span className="text-light-blue font-barlow-condensed text-sm tracking-[0.125rem] uppercase">
                    Avg. distance
                  </span>
                  <span className="font-bellefair text-[1.75rem] text-white uppercase">
                    {data.destinations[0].distance}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-light-blue font-barlow-condensed text-sm tracking-[0.125rem] uppercase">
                    Est travel time
                  </span>
                  <span className="font-bellefair text-[1.75rem] text-white uppercase">
                    {data.destinations[0].travel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const CrewContent = () => {
  const [state, setState] = useState<number>(0);

  const handleClick = (order: number) => {
    setState(order);
  };

  return (
    <>
      <div className="flex flex-col items-center p-6 md:p-10">
        <div className="flex w-full flex-col items-center gap-6 md:items-start">
          <div className="flex gap-6">
            <span className="font-barlow-condensed font-bold tracking-[0.15em] text-white/25 md:text-xl">
              02
            </span>
            <span className="font-barlow-condensed tracking-[0.15em] text-white uppercase md:text-xl">
              Meet your crew
            </span>
          </div>
          <div className="flex w-full max-w-[20.43rem] flex-col items-center justify-between gap-6 md:max-w-full md:gap-8">
            <div className="flex flex-col gap-6 pt-10 md:max-w-[32rem]">
              <div className="flex flex-col gap-6 text-center">
                <div className="flex flex-col items-center gap-2 md:p-4">
                  <span className="font-bellefair text-lg text-white/50 uppercase md:text-2xl">
                    {data.crew[0].role}
                  </span>
                  <span className="font-bellefair text-2xl text-white uppercase md:text-[2.5rem]">
                    {data.crew[0].name}
                  </span>
                </div>
                <p className="font-barlow text-light-blue h-[8.4375rem] text-[0.9375rem] leading-[180%] md:h-auto md:text-base">
                  {data.crew[0].bio}
                </p>
              </div>
              <ul className="flex justify-center gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleClick(i)}
                      className={`${state === i ? "bg-white" : "bg-white/15"} size-[0.625rem] rounded-full bg-white tracking-[0.13125rem]`}
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                className="w-[16.9375rem] md:w-[27.915rem]"
                src={data.crew[0].images.webp}
                alt={data.crew[0].name}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const TechnologyContent = () => {
  const [state, setState] = useState<number>(0);

  const handleClick = (number: number) => {
    setState(number);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2 p-6 md:items-start md:p-10">
        <div className="flex items-center gap-6">
          <span className="font-barlow-condensed font-bold tracking-[0.15em] text-white/25 md:text-[1.25rem]">
            03
          </span>
          <span className="font-barlow-condensed tracking-[0.15em] text-white uppercase md:text-[1.25rem]">
            Space launch 101
          </span>
        </div>
        <div className="flex flex-col gap-8 md:w-full md:items-center">
          <div className="relative flex h-[20.125rem] flex-col gap-2 overflow-hidden pt-[4rem] md:static md:w-full">
            <img
              src={data.technology[0].images.landscape}
              className="absolute -bottom-10 h-[18.3125rem] w-[768px] object-cover md:static md:h-[22.3125rem]"
            />
          </div>
          <div className="flex flex-col gap-10 md:w-full md:items-center">
            <ul className="flex justify-center gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <li>
                  <button
                    className={`${state === i ? "text-dark-blue border-transparent bg-white" : "border-white/25 text-white"} font-bellefair size-10 rounded-full border text-lg md:size-14 md:text-2xl`}
                    onClick={() => handleClick(i)}
                    key={i}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center gap-4 text-center md:w-full md:max-w-[32rem]">
              <div className="flex flex-col gap-4">
                <span className="font-bellefair text-lg text-white/50 uppercase">
                  The terminology ...
                </span>
                <span className="font-bellefair text-2xl text-white uppercase md:text-[2.5rem]">
                  {data.technology[0].name}
                </span>
              </div>
              <p className="font-barlow text-light-blue h-[8.4375rem] max-w-[20.4375rem] text-[0.9375rem] leading-[180%] md:max-w-full md:text-base">
                {data.technology[0].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
