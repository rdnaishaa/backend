const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:3000", // Local development
      "http://localhost:5173", // Vite dev server
      "https://backend-one-hazel-88.vercel.app" // Backend URL (no trailing slash)
    ],
    credentials: true
  })
);

app.use(express.json()); // This will parse JSON request body

// Routes
app.use("/store", require("./scr/routes/store.route"));
app.use("/user", require("./scr/routes/user.route"));
app.use("/item", require("./scr/routes/item.route"));
app.use("/transaction", require("./scr/routes/transaction.route"));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
