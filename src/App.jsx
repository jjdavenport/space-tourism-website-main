import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Technology from "./pages/technology/technology";
import Crew from "./pages/crew/crew";
import Destination from "./pages/destination/destination";
import Homepage from "./pages/home/homepage";
import { useMediaQuery } from "react-responsive";
import MediaContext from "./hooks/media-context";

function App() {
  const media = useMediaQuery({ minWidth: 1024 });
  return (
    <MediaContext.Provider value={media}>
      <Router basename="/space-tourism-website-main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology desktop={media} />} />
        </Routes>
      </Router>
    </MediaContext.Provider>
  );
}

export default App;
