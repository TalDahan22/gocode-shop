import { useContext } from "react";
import CartContext from "../context/CartContext";
import "./Product.css";
import { Link } from "react-router-dom";
const Product = ({ id, title, price, image , }) => {
  const { cartArray, setCartArray, updateCart } = useContext(CartContext);

  //   const product = { id, title, price, image };
  //   console.log(cartArray);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt='pic'/>
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
        <Link to={`products/${id}`}>
        <button>show product</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
