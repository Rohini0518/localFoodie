import "./App.css";
import LandingPage from "./pages/LandingPage";
import Welcomepage from "./pages/Welcomepage";
import { Outlet, Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="" element={<Welcomepage />} />
        <Route path="landingPage" element={<LandingPage />} />
      </Routes>
  );
}

export default App;
