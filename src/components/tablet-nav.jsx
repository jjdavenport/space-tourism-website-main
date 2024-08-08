import logo from "./assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const TabletNav = () => {
  const [page, activePage] = useState("home");

  const click = (page) => {
    activePage(page);
  };
  return (
    <nav className="flex items-center justify-between">
      <img src={logo} alt="Logo" className="p-8" />
      <ul className="flex h-full items-center gap-8 bg-white bg-opacity-5 px-10 uppercase backdrop-blur-lg">
        <li className="flex h-full">
          <Link
            to="/"
            className={`${page === "home" ? "border-white" : "border-transparent"} flex h-full items-center border-b-4 transition-all duration-300 hover:border-white`}
            onClick={() => click("home")}
          >
            Home
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            to="/destination"
            className={`${page === "destination" ? "border-white" : "border-transparent"} flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white`}
            onClick={() => click("destination")}
          >
            Destination
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            to="/crew"
            className={`${page === "crew" ? "border-white" : "border-transparent"} flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white`}
            onClick={() => click("crew")}
          >
            Crew
          </Link>
        </li>
        <li className="flex h-full">
          <Link
            to="/technology"
            className={`${page === "technology" ? "border-white" : "border-transparent"} flex h-full items-center border-b-4 border-transparent transition-all duration-300 hover:border-white`}
            onClick={() => click("technology")}
          >
            Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TabletNav;
