import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Installation from "./components/Installation.jsx";
import About from "./components/About.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
