import "./App.css";
import CartLogic from "./components/CartLogic";
import Navbar from "./components/Navbar";
import AddToCartPage from "./pages/AddToCartPage";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./pages/LoginForm";
import Welcomepage from "./pages/Welcomepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartLogic>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcomepage />} />
        <Route path="landingPage" element={<LandingPage />} />
        <Route path="cart" element={<AddToCartPage/>}/>
        <Route path="login" element={<LoginForm/>}/>
      </Routes>
      </CartLogic>
  );
}

export default App;
