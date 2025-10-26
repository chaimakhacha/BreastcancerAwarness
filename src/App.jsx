import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import MainDiv from "./components/main.jsx";
import Model from "./components/model.jsx";
import Doctors from "./pages/Doctors.jsx";
import Definitionmodel from "./components/model.jsx";
import FactsStats from "./pages/FactsStats.jsx";
import FAQMyths from "./pages/FAQMyths.jsx";
import "./styling/mainbody.css";
import "./index.css";
import Footer from "./components/Footer.jsx";

export default function Main() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainDiv />} />
        <Route path="/about" element={<Definitionmodel />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/facts-stats" element={<FactsStats />} />
        <Route path="/faq-myths" element={<FAQMyths />} />
      </Routes>
      <Footer />
    </Router>
  );
}
