import React from "react";
import Product from "../product/Product";
import "./Products.css";

const Products = ({ products }) => {
  return (
    <section className="products">
      {products.map((item) => {
        return (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </section>
  );
};

export default Products;
