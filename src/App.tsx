import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./components/container/PageContainer";
import String from "./pages/String";
import Integer from "./pages/Integer";
import Array from "./pages/Array";
import Date from "./pages/Date";
import Math from "./pages/Math";
import Json from "./pages/Json";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/string" element={<String />} />
          <Route path="/integer" element={<Integer />} />
          <Route path="/array" element={<Array />} />
          <Route path="/date" element={<Date />} />
          <Route path="/math" element={<Math />} />
          <Route path="/json" element={<Json />} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

export default App;
