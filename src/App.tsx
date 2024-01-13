import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import String from "./pages/String";
import Number from "./pages/Number";
import Array from "./pages/Array";
import Date from "./pages/Date";
import Math from "./pages/Math";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/number" element={<Number />} />
        <Route path="/string" element={<String />} />
        <Route path="/array" element={<Array />} />
        <Route path="/date" element={<Date />} />
        <Route path="/math" element={<Math />} />
      </Routes>
    </Router>
  );
}

export default App;
