import close from "./assets/shared/icon-close.svg";

const MobileMenu = ({ toggle, closeMenu }) => {
  return (
    <div // dialog will not position correctly
      className={`fixed right-0 z-10 m-0 flex h-full w-4/6 flex-col gap-20 bg-transparent p-10 text-white backdrop-blur-lg transition-transform duration-300 ease-in-out ${
        toggle
      }`}
    >
      <button className="flex justify-end" onClick={closeMenu}>
        <img src={close} alt="Close menu" />
      </button>
      <ul className="flex flex-col gap-8 uppercase">
        <li>
          <a href="#">00 Home</a>
        </li>
        <li>
          <a href="#">01 Destination</a>
        </li>
        <li>
          <a href="#">02 Crew</a>
        </li>
        <li>
          <a href="#">03 Technology</a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
