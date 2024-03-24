const mongoose = require("mongoose");

// Define the model
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: false,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Saves created
  }
);

// Setting the model
const Product = mongoose.model("Product", ProductSchema);

// Exporting the model to index.js
module.exports = Product;
