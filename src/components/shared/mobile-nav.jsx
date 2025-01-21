import logo from "../../assets/shared/logo.svg";
import menu from "../../assets/shared/icon-hamburger.svg";
import MobileMenu from "./mobile-menu";
import { useState } from "react";

const mobileNav = () => {
  const [menuOpen, isMenuOpen] = useState(false);

  const toggleMenu = () => {
    isMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="flex items-center justify-between p-5">
        <img className="w-9" src={logo} />
        <button onClick={toggleMenu}>
          <img className="w-6" src={menu} />
        </button>
      </nav>
      <MobileMenu
        toggle={menuOpen ? "translate-x-0" : "translate-x-full"}
        closeMenu={toggleMenu}
      />
    </>
  );
};

export default mobileNav;
