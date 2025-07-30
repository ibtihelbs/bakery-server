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

router.post("/", async (req, res) => {
  const newProd = req.body;
  console.log("request log by ibs", newProd);
  console.log("request log by ibs", req.body);
  const addProd = new products(newProd);
  try {
    await addProd.save();
    res.status(201).send(addProd);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});


module.exports = router;
