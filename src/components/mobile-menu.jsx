import close from "./assets/shared/icon-close.svg";
import { Link } from "react-router-dom";

const MobileMenu = ({ toggle, closeMenu }) => {
  return (
    <div // dialog will not position correctly
      className={`fixed right-0 z-10 m-0 flex h-full w-4/6 flex-col gap-20 overflow-hidden bg-transparent p-10 text-white backdrop-blur-lg transition-transform duration-300 ease-in-out ${
        toggle
      }`}
    >
      <button className="flex justify-end" onClick={closeMenu}>
        <img src={close} alt="Close menu" />
      </button>
      <ul className="flex flex-col gap-8 uppercase">
        <li>
          <Link to="/">00 Home</Link>
        </li>
        <li className="flex h-full">
          <Link to="/destination">01 Destination</Link>
        </li>
        <li className="flex h-full">
          <Link to="/crew">02 Crew</Link>
        </li>
        <li className="flex h-full">
          <Link to="/technology">03 Technology</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
