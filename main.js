require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// CORS: Allow requests from your frontend
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Routes
const productsRoutes = require("./routes/products");
app.use("/products", productsRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Hi, the route is working!");
});

// Database connection
mongoose
  .connect(process.env.URL)
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.log("❌ DB connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});