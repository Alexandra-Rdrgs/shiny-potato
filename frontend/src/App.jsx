import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import News from "./pages/News";
import FindUs from "./pages/FindUs";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/la-carte" element={<Menu />} />
        <Route path="/actualites" element={<News />} />
        <Route path="/nous-trouver" element={<FindUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
