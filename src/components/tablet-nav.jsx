import logo from "./assets/shared/logo.svg";
import { Link } from "react-router-dom";

const TabletNav = () => {
  return (
    <nav className="flex items-center justify-between">
      <img src={logo} alt="Logo" className="p-8" />
      <ul className="flex h-full items-center gap-8 bg-white bg-opacity-5 px-10 uppercase backdrop-blur-lg">
        <li className="flex h-full">
          <Link
            to="/"
            className="flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white"
          >
            Home
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            to="/destination"
            className="flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white"
          >
            Destination
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            to="/crew"
            className="flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white"
          >
            Crew
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            to="/technology"
            className="flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white"
          >
            Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TabletNav;
