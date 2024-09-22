const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.routes.js");
const app = express();

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
