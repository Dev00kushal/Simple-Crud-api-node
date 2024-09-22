const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.routes.js");
require("dotenv").config();
const app = express();

app.use(express.json({
  strict: true
}))


app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/products", productRoute);

let PORT = 3000;

// Database connection
mongoose
  .connect(
    process.env.MONGO_URI
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
