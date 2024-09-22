const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter the product name"],
    },
    quantity: { 
      type: Number,
      default: 0,
      required: [true, "Enter the quantity"],
    },
    price: {
      type: Number,
      default: 0,
      required: [true, "Please enter the price"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, 
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
