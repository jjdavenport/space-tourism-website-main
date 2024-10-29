import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Technology from "./technology";
import Crew from "./crew";
import Destination from "./destination";
import Homepage from "./homepage";
import { useMediaQuery } from "react-responsive";

function App() {
  const media = useMediaQuery({ minWidth: 1024 });
  return (
    <Router basename="/space-tourism-website-main">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew desktop={media} />} />
        <Route path="/technology" element={<Technology desktop={media} />} />
      </Routes>
    </Router>
  );
}

export default App;
