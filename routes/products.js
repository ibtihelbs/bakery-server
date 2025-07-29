const express = require("express");
const router = express().router;
const products = require("../modal/products");
router.get("/", async (req, res) => {
  try {
    const prod = await products.find();
    res.status(200).send(prod);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
