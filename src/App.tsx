import { useMediaQuery } from "react-responsive";
import {
  Wrapper,
  Container,
  MobileNav,
  TabletNav,
  DesktopNav,
  Footer,
} from "./components/content";
import { Outlet } from "react-router";

function App() {
  const desktop = useMediaQuery({ minWidth: 1024 });
  const tablet = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <Wrapper>
        {desktop ? (
          <DesktopNav desktop={desktop} />
        ) : tablet ? (
          <TabletNav />
        ) : (
          <MobileNav />
        )}
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
