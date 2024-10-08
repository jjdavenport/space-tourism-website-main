import MobileNav from "./mobile-nav";
import TabletNav from "./tablet-nav";
import DesktopNav from "./desktop-nav";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });

  return (
    <>{isDesktop ? <DesktopNav /> : isTablet ? <TabletNav /> : <MobileNav />}</>
  );
};

export default Nav;
