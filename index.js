const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const { ReturnDocument } = require("mongodb");
const { error } = require("console");
const app = express();

// Middleware to parse JSON bodies
app.use(
  express.json({
    strict: true, // Ensure only JSON objects are accepted
  })
);

let PORT = 3000;

// Get all products
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

// Get a product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if `id` is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Create a new product
app.post("/api/products/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product); // Use 201 for created resources
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Update a product by ID

app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
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
