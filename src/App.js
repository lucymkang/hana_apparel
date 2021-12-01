import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Products, Error } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
