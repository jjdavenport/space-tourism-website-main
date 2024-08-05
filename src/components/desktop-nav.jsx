import logo from "./assets/shared/logo.svg";
import { Link } from "react-router-dom";

const desktopNav = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-8">
        <img src={logo} alt="" className="px-8" />
        <div className="z-10 -mr-20 h-1 w-full border-b border-white border-opacity-40"></div>
        <ul className="flex h-full w-full items-center justify-evenly gap-8 pl-32 pr-16 uppercase backdrop-blur-3xl">
          <li className="flex h-full">
            <Link
              to="/"
              className="flex h-full items-center border-b-4 border-transparent py-10 transition-all duration-300 hover:border-white"
            >
              00 Home
            </Link>
          </li>
          <li className="flex h-full">
            <Link
              to="/destination"
              className="flex h-full items-center border-b-4 border-transparent py-10 transition-all duration-300 hover:border-white"
            >
              01 Destination
            </Link>
          </li>
          <li className="flex h-full">
            <Link
              to="/crew"
              className="flex h-full items-center border-b-4 border-transparent py-10 transition-all duration-300 hover:border-white"
            >
              02 Crew
            </Link>
          </li>
          <li className="flex h-full">
            <Link
              to="/technology"
              className="flex h-full items-center border-b-4 border-transparent py-10 transition-all duration-300 hover:border-white"
            >
              03 Technology
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default desktopNav;
