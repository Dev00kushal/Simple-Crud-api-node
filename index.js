const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

app.use(express.json({
  strict: true,
}));

let PORT = 3000;

app.get("/api/products/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});







// Post request
app.post("/api/products/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
});   

// Database connection
mongoose
  .connect(
    "mongodb+srv://kushal:kushal@simple-backend.sct8c.mongodb.net/Collections?retryWrites=true&w=majority&appName=Simple-Backend"
  )
  .then(() => {
    console.log("connected to the database");

    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
