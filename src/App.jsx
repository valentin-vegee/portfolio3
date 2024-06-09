import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Etude from "./page/Etude";
import Experience from "./page/Experience";
import Nopage from "./page/Nopage";
import Header from "./components/Header";
import FooterPage from "./components/footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/etude" element={<Etude />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
      <FooterPage />
    </div>
  );
}
