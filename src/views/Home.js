import React from "react";
import Products from "../components/products/Products";
import Header from "../components/header/Header";
import Cart from "../components/cart/Cart";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import CartContext from "../components/context/CartContext";
import { Man } from "@mui/icons-material";
import CardProduct from "./CardProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [cartArray, setCartArray] = useState([]);
  const [orginalProducts, setOriginalProducts] = useState([]);
  const [min, setMin] = useState([]);
  const [max, setMax] = useState([]);

  useEffect(() => {
    fetch("https://bedecked-stone-turret.glitch.me/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setOriginalProducts(products);
        setSpinner(true);
        setMin(Math.min(...products.map(({ price }) => price)));
        setMax(Math.max(...products.map(({ price }) => price)));
        setCategories(
          products
            .map((p) => p.category)
            .filter((value, index, array) => array.indexOf(value) === index)
        );
      });
  }, []);
  console.log(min, max);

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
        ? orginalProducts
        : orginalProducts.filter((product) => product.category === category)
    );
  };

  const changeProductsSlider = (range) => {
    const min = range[0];
    const max = range[1];
    setProducts(
      orginalProducts.filter(({ price }) => price > min && price < max)
    );
  };
  return (
    <div>
      <Header
        categories={categories}
        changeProducts={changeProducts}
        products={products}
        changeProductsSlider={changeProductsSlider}
        min={min}
        max={max}
      />
      <CardProduct />
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
