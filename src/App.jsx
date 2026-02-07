import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Memories from "./pages/Memories";
import FutureFamily from "./pages/FutureFamily";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroCarousel />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/family" element={<FutureFamily />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
