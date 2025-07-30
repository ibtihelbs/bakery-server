require("dotenv").config();
const express = require("express");
const PORT = 5000;
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const productsRoutes = require("./routes/products");
mongoose
  .connect(process.env.URL)
  .then(console.log("database connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hi the route is working ! !");
});
app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log("server is running on port : " + PORT);
});
