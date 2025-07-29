require("dotenv").config();
const mockData = require("./data.json");
const Job = require("./modal/products");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.URL)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

const start = async () => {
  try {
    await mongoose.connect(process.env.URL);
    await Job.create(mockData);
    console.log("Success !!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
