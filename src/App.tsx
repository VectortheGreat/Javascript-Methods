import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./components/container/PageContainer";
import StringMethods from "./pages/StringMethods";
import IntegerMethods from "./pages/IntegerMethods";
import ArrayMethods from "./pages/ArrayMethods";
import DateMethods from "./pages/DateMethods";
import NumberMethods from "./pages/NumberMethods";
import JsonMethods from "./pages/JsonMethods";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/string" element={<StringMethods />} />
          <Route path="/integer" element={<IntegerMethods />} />
          <Route path="/array" element={<ArrayMethods />} />
          <Route path="/date" element={<DateMethods />} />
          <Route path="/number" element={<NumberMethods />} />
          <Route path="/json" element={<JsonMethods />} />
        </Routes>
      </PageContainer>
    </Router>
  );
}

export default App;
