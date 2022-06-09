import React from "react";
import Product from '../product/Product'
import './Products.css';

const Products= ({productArr})=>{

return(<section className="products">
{productArr.map((item)=>{
    return <Product key={item.id} title={item.title} price={item.price} image={item.image} />;
}
)}
</section>
)}



export default Products;
