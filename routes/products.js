const express = require("express");
const router = express().router;

router.get("/", (req, res) => {
  res.send("ahla wsahla fi products");
});

module.exports = router;
