import logo from "./assets/shared/logo.svg";

const tabletNav = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-8">
        <img src={logo} alt="" />
        <ul className="flex gap-8 uppercase">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Crew</a>
          </li>
          <li>
            <a href="#">Technology</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default tabletNav;
