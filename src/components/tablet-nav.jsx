import logo from "./assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";

const TabletNav = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav className="flex h-24 w-full items-center justify-between">
      <img src={logo} alt="Logo" className="p-8" />
      <ul className="flex h-full items-center gap-8 bg-white bg-opacity-5 px-10 uppercase backdrop-blur-lg">
        <li className="flex h-full">
          <Link
            to="/"
            className={`${path === "/" ? "border-white" : "border-transparent"} flex h-full items-center border-b-4 transition-all duration-300 hover:border-white`}
          >
            Home
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            to="/destination"
            className={`${path === "/destination" ? "border-white" : "border-transparent"} flex h-full items-center border-b-4 transition-all duration-300 hover:border-white`}
          >
            Destination
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            to="/crew"
            className={`${path === "/crew" ? "border-white" : "border-transparent"} flex h-full items-center border-b-4 transition-all duration-300 hover:border-white`}
          >
            Crew
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            to="/technology"
            className={`${path === "/technology" ? "border-white" : "border-transparent"} flex h-full items-center border-b-4 transition-all duration-300 hover:border-white`}
          >
            Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TabletNav;
