import { Wrapper, Container, MobileNav } from "./components/content";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Wrapper>
        <MobileNav />
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
