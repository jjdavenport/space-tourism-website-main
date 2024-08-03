import logo from "./assets/shared/logo.svg";

const desktopNav = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-8">
        <img src={logo} alt="" className="px-8" />
        <div className="z-10 -mr-20 h-1 w-full border-b border-white border-opacity-40"></div>
        <ul className="flex h-full w-full items-center justify-evenly gap-8 pl-32 pr-16 uppercase backdrop-blur-3xl">
          <li className="flex h-full">
            <a
              className="flex h-full items-center border-b-4 border-transparent py-10 transition-all duration-300 hover:border-white"
              href="#"
            >
              00 Home
            </a>
          </li>
          <li className="flex h-full">
            <a
              className="flex h-full items-center border-b-4 border-transparent py-10 transition-all duration-300 hover:border-white"
              href="#"
            >
              01 Destination
            </a>
          </li>
          <li className="flex h-full">
            <a
              className="flex h-full items-center border-b-4 border-transparent py-10 transition-all duration-300 hover:border-white"
              href="#"
            >
              02 Crew
            </a>
          </li>
          <li className="flex h-full">
            <a
              className="flex h-full items-center border-b-4 border-transparent py-10 transition-all duration-300 hover:border-white"
              href="#"
            >
              03 Technology
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default desktopNav;
