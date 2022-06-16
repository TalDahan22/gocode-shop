import { useContext } from "react";
import CartContext from "../context/CartContext";
import "./Product.css";
const Product = ({ id, title, price, image , }) => {
  const { cartArray, setCartArray, updateCart } = useContext(CartContext);

  //   const product = { id, title, price, image };
  //   console.log(cartArray);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
        <button
          onClick={() => {
            updateCart(id);
          }}
        >
          add to your cart
        </button>
      </div>
    </div>
  );
};

export default Product;
