import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Technology from "./technology";
import Crew from "./crew";
import Destination from "./destination";
import Homepage from "./homepage";
import "./App.css";

function App() {
  return (
    <Router basename="/space-tourism-website-main">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
