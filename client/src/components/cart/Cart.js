import { useContext } from "react";
import CartContext from "../context/CartContext";
import Product from "../product/Product";
import "./Cart.css";
const Cart = () => {
  const { cartArray, removeProduct } = useContext(CartContext);
  console.log("cartArray", cartArray);

  return cartArray.map((product) => {
    return (
      <div className="product-card" key={product.id}>
        <div className="product-image">
          <img src={product.image} alt="pic" />
        </div>
        <div className="product-info">
          <h5>{product.title}</h5>
          <h6>{product.price}</h6>
          <div id={product.id}></div>
          <button onClick={() => removeProduct(product.id)}>
            remove item from cart
          </button>
        </div>
      </div>
    );
  });
};
export default Cart;
