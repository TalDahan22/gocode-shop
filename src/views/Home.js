import React from "react";
import Products from "../components/products/Products";
import Header from "../components/header/Header";
import Cart from "../components/cart/Cart";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import CartContext from "../components/context/CartContext";

const Home = () => {
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
  };

  return (
    <div>
      <Header
        categories={categories}
        changeProducts={changeProducts}
        products={products}
      />
      {!spinner ? (
        <main className="spinner-examples">
          <div className="example">
            <span className="smooth spinner" />
          </div>
        </main>
      ) : null}
      <CartContext.Provider
        value={{
          cartArray: cartArray,
          setCartArray: setCartArray,
          updateCart: updateCart,
          removeProduct: removeProduct,
        }}
      >
        <Cart />

        <Products products={products} />
      </CartContext.Provider>
    </div>
  );
};

export default Home;
