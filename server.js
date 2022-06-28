import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(express.static("client/build"));
dotenv.config();

const PORT = process.env.PORT || 8000;
const url = process.env.MONGO_URI || "mongodb://localhost:27017";

app.get("/api/", (req, res) => {
  res.send("hi");
});
// app.get("/api/products", (req, res) => {
//   fsp
//     .readFile("./api/products.json", "utf8")
//     .then((data) => res.send(JSON.parse(data)));
// });

app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  Product.findById(productId)
    .then((product) => {
      res.send(product);
    })
    .catch((e) => res.send("you got an ERROR"));
});

function getMaxId(arr) {
  const ids = arr.map((object) => {
    return object.id;
  });
  const max = Math.max(...ids);
  return max;
}

app.post("/api/products", (req, res) => {
  const { title, price, image, category, description } = req.body;
  console.log(title);
  Product.insertMany([
    {
      title,
      price,
      image,
      description,
      category,
    },
  ]).then((products) => {
    res.send(products);
  });
});

app.patch("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  Product.findByIdAndUpdate(productId, req.body)
    .then((products) => res.send(products))
    .catch((e) => res.send("you got an ERROR"));
});

app.delete("/api/products/:productId", (req, res) => {
  const { productId } = req.params;

  Product.findByIdAndRemove(productId)
    .then((product) => res.send(product))
    .catch((e) => res.send("you got an ERROR"));
});

app.get("/api/products", (req, res) => {
  console.log("req.query", req.query);
  const { title } = req.query;

  if (req.query) {
    const { title } = req.query;
    Product.find().then((products) => {
      const afterFilterProducts = title
        ? products.filter((product) =>
            product.title.toLowerCase().includes(title.toLowerCase())
          )
        : products;

      res.send(afterFilterProducts);
    });
  } else {
    res.send(products);
  }
});

app.get("*", (req, res) => {
  res.sendFile("client/build/index.html");
});

const { DB_PASS, DB_NAME, DB_USER, DB_HOST } = process.env;

const Product = mongoose.model("Product", {
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
});

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`)
  .then(() => {
    app.listen(PORT);
  });
