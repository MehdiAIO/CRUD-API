require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

// Connect to MongoDB database using Mongo Atlas connection or localServer
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("running on port 3000");
    });
  })
  .catch((err) => console.log(err));
