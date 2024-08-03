import logo from "./assets/shared/logo.svg";
import menu from "./assets/shared/icon-hamburger.svg";
import MobileMenu from "./mobile-menu";
import { useState } from "react";

const mobileNav = () => {
  const [menuOpen, isMenuOpen] = useState(false);

  const toggleMenu = () => {
    isMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="flex items-center justify-between p-8">
        <img src={logo} alt="" />
        <button onClick={toggleMenu}>
          <img src={menu} alt="" />
        </button>
      </nav>
      <MobileMenu
        toggle={menuOpen ? "flex" : "hidden"}
        closeMenu={toggleMenu}
      />
    </>
  );
};

export default mobileNav;
