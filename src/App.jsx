import { Route, Routes } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import All from "./Componets/All";
import Cloths from "./Componets/Cloths";
import Electronic from "./Componets/Electronic";
import Category from "./Componets/Category";
import Orders from "./Componets/Orders";
import Login from "./Componets/Login";
import SignUp from "./Componets/SignUp";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/Cloths" element={<Cloths />} />
          <Route path="/Electronics" element={<Electronic />} />
          <Route path="/category" element={<Category />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
