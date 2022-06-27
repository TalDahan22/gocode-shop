import { useContext } from "react";
import CartContext from "../context/CartContext";
import "./Product.css";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
const Product = ({ id, title, price, image }) => {
  const { cartArray, setCartArray, updateCart } = useContext(CartContext);

  const product = { id, title, price, image };
  console.log(cartArray);
  return (
    <Card sx={{ maxWidth: 500 }} className="product-card">
      <CardHeader title={title} />
      <img
        className="product-image"
        src={image}
        alt="pic"
        component="img"
        height="220"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
      </CardContent>
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
    </Card>
  );
};

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
// <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
// </Card>
//   );
// }

export default Product;
