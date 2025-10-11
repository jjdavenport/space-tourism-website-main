import { useMediaQuery } from "react-responsive";
import { Wrapper, Container, MobileNav, TabletNav } from "./components/content";
import { Outlet } from "react-router";

function App() {
  const tablet = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <Wrapper>
        {tablet ? <TabletNav /> : <MobileNav />}
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
