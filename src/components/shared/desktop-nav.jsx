import logo from "../../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";

const desktopNav = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <nav className="flex w-full items-center justify-between pt-8">
        <img src={logo} className="px-8" />
        <div className="z-10 -mr-10 h-1 w-full border-b-2 border-white border-opacity-20"></div>
        <ul className="flex h-full w-full items-center justify-evenly gap-10 bg-white bg-opacity-[0.01] text-lg uppercase backdrop-blur-xl ~md/xl:~pr-20/36 ~md/xl:~pl-20/32">
          <li className="flex h-full">
            <Link
              to="/"
              className={`${path === "/" ? "border-white" : "border-transparent"} flex h-full items-center gap-2 whitespace-nowrap border-b-4 py-10 font-light tracking-widest transition-colors duration-300 ease-in-out hover:border-white`}
            >
              <span className="font-bold">00</span> Home
            </Link>
          </li>
          <li className="flex h-full">
            <Link
              to="/destination"
              className={`${path === "/destination" ? "border-white" : "border-transparent"} flex h-full items-center gap-2 whitespace-nowrap border-b-4 py-10 font-light tracking-widest transition-colors duration-300 ease-in-out hover:border-white`}
            >
              <span className="font-bold">01</span> Destination
            </Link>
          </li>
          <li className="flex h-full">
            <Link
              to="/crew"
              className={`${path === "/crew" ? "border-white" : "border-transparent"} flex h-full items-center gap-2 whitespace-nowrap border-b-4 py-10 font-light tracking-widest transition-colors duration-300 ease-in-out hover:border-white`}
            >
              <span className="font-bold">02</span> Crew
            </Link>
          </li>
          <li className="flex h-full">
            <Link
              to="/technology"
              className={`${path === "/technology" ? "border-white" : "border-transparent"} flex h-full items-center gap-2 whitespace-nowrap border-b-4 py-10 font-light tracking-widest transition-colors duration-300 hover:border-white`}
            >
              <span className="font-bold">03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default desktopNav;
