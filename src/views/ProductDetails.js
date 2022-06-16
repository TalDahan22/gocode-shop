import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {  
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((product) => {
            setProducts(product);
            setSpinner(true);
          });
      }, []);

    return (
      <div className="product-card">
        <div className="product-image">
          <img src={products.image} alt="pic" />
        </div>
        <div className="product-info">
          <h5>{products.title}</h5>
          <h6>{products.price}</h6>
          <h6>{products.description}</h6>
          <h6>{products.category}</h6>
        </div>
      </div>
    );
  };
  







export default ProductDetails;