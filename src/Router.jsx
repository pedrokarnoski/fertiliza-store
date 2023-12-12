import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
  );
}
