import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [cartArray, setCartArray] = useState([]);

  useEffect(() => {
    fetch("https://bedecked-stone-turret.glitch.me/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setSpinner(true);
        setCategories(
          products
            .map((p) => p.category)
            .filter((value, index, array) => array.indexOf(value) === index)
        );
      });
  }, []);

  function updateCart(id) {
    console.log("products", products);
    const newItem = products.find((product) => product.id === id);
    setCartArray([...cartArray, newItem]);
  }

  function removeProduct(id) {
    const newArray = cartArray.filter((product) => product.id !== id);
    setCartArray(newArray);
  }

  const changeProducts = (category) => {
    setProducts(
      category === "allProducts"
        ? products
        : products.filter((product) => product.category === category)
    );
    // });
  };

  return (
    <div className="App">
      <Link to={'/'}>
      go back to home page
      </Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  </div>
  );
};

export default App;
