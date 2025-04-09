import {  useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Welcomepage from "./pages/Welcomepage";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./CartContext";

function App() {
  const [cart,setCart]=useState()
  return (
<CartContext.Provider value={{cart,setCart}}>
      <Routes>
        <Route path="" element={<Welcomepage />} />
        <Route path="landingPage" element={<LandingPage />} />
      </Routes>
      </CartContext.Provider>
  );
}

export default App;
