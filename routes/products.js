const express = require("express");
const router = express().router;
const products = require("../modal/products");
const mongoose = require("mongoose");
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

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("no such id");
    return;
  }
  try {
    await products.findByIdAndDelete(id);
    res.json({ message: "deleted" });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log("no such id");
    return;
  }
  try {
    await products.findByIdAndUpdate(id, update);
    res.json({ message: "updated" });
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
