import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardContent, CardHeader, CardMedia, Grid } from "@mui/material";
import { flexbox } from "@mui/system";
import "./productDetails.css";

const ProductDetails = (updateCart) => {
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
    <Grid container justifyContent={"center"}>
      <Card sx={{ maxWidth: 360 }}>
        <CardHeader title={products.title} />
        <CardMedia
          image={products.image}
          alt="pic"
          component="img"
          height="500"
        ></CardMedia>
        <CardContent>
          <div className="product-info">
            <h5>{products.title}</h5>
            <h6>{products.price}</h6>
            <h6>{products.description}</h6>
            <h6>{products.category}</h6>
          </div>
        </CardContent>
        <button
          onClick={() => {
            updateCart(id);
          }}
        >
          add to your cart
        </button>
      </Card>
    </Grid>
  );
};

export default ProductDetails;
