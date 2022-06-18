import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="App">
      {location.pathname !== "/" && <Link to={"/"}>go back to home page</Link>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
