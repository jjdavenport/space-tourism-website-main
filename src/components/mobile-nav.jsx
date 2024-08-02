import logo from "./assets/shared/logo.svg";
import menu from "./assets/shared/icon-hamburger.svg";

const mobileNav = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-8">
        <img src={logo} alt="" />
        <button>
          <img src={menu} alt="" />
        </button>
      </nav>
    </>
  );
};

export default mobileNav;
