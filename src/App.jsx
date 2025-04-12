import "./App.css";
import CartLogic from "./components/CartLogic";
import LandingPage from "./pages/LandingPage";
import Welcomepage from "./pages/Welcomepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartLogic>
      <Routes>
        <Route path="" element={<Welcomepage />} />
        <Route path="landingPage" element={<LandingPage />} />
      </Routes>
      </CartLogic>
  );
}

export default App;
