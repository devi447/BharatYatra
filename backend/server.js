require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/database");

// NEW: Import auth routes
const authRoutes = require("./routes/auth");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// NEW: Register auth routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to BharatYatra API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});