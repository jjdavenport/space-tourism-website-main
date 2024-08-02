import logo from "./assets/shared/logo.svg";

const desktopNav = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-8">
        <img src={logo} alt="" />
        <ul className="flex gap-8 uppercase">
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
      </nav>
    </>
  );
};

export default desktopNav;
