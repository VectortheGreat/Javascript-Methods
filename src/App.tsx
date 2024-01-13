import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./components/container/PageContainer";
import String from "./pages/String";
import Number from "./pages/Number";
import Array from "./pages/Array";
import Date from "./pages/Date";
import Math from "./pages/Math";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/string" element={<String />} />
          <Route path="/number" element={<Number />} />
          <Route path="/array" element={<Array />} />
          <Route path="/date" element={<Date />} />
          <Route path="/math" element={<Math />} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

export default App;
