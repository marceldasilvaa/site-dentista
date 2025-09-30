// router
import { Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
