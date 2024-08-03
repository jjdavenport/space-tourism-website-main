import logo from "./assets/shared/logo.svg";

const tabletNav = () => {
  return (
    <>
      <nav className="flex items-center justify-between">
        <img src={logo} alt="" className="p-8" />
        <ul className="flex h-full items-center gap-8 bg-white bg-opacity-5 px-10 uppercase backdrop-blur-lg">
          <li className="flex h-full">
            <a
              className="flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="flex h-full">
            <a
              className="flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white"
              href="#"
            >
              Destination
            </a>
          </li>
          <li className="flex h-full">
            <a
              className="flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white"
              href="#"
            >
              Crew
            </a>
          </li>
          <li className="flex h-full">
            <a
              className="flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white"
              href="#"
            >
              Technology
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default tabletNav;
