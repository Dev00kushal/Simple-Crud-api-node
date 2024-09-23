const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      required: [true, "Please enter if the product is availabile or not"],
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", ItemsSchema);

module.exports = Item;
