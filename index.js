const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// CORS options configuration
const corsOptions = {
  origin: [
    "http://localhost:3000",  // Local development
    "http://localhost:5173",  // Vite dev server
    "https://backend-one-hazel-88.vercel.app" // Backend URL (no trailing slash)
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200,  // Handle legacy browsers
};

// Apply CORS middleware globally for the server
app.use(cors(corsOptions));  // No need for manual header setting

// Parse incoming JSON data
app.use(express.json());

// Add a root endpoint for testing
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

// Your existing routes
app.use("/store", require("./src/routes/store.route"));
app.use("/user", require("./src/routes/user.route"));
app.use("/item", require("./src/routes/item.route"));
app.use("/transaction", require("./src/routes/transaction.route"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
