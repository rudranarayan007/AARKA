import React from "react";
import Desktop109 from "./Components/Desktop109";
import Desktop31 from "./Components/Desktop31";
import Desktop107 from "./Components/Desktop107";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desktop31" element={<Desktop31 />} />
          <Route path="/desktop109" element={<Desktop109 />} />
          <Route path="/desktop107" element={<Desktop107 />} />
        </Routes>
      </Router>
  );
}
