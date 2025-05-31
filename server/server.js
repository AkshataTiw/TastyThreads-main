require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const connectDb = require("./config/db");
const router = require("./routers/route");
const viewRoutes = require('./routers/viewRoutes');

const app = express();
const PORT = 5000;

// ✅ Middleware - Order Matters!
app.use(cors({
  origin: "https://tastythreads-main.vercel.app", // use your real Vercel frontend URL
  credentials: true
}));

app.use(express.json()); // ✅ Ensure this is BEFORE the router
app.use(express.urlencoded({ extended: true })); 

// Serve static files
app.use("/uploads", express.static("uploads"));

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });
app.use(upload.none()); 

// ✅ Routes (should come AFTER middleware)
app.use("/", router);

app.use('/TastyThreads/views', viewRoutes);


// Database connection and server startup
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running at :${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed", error);
    process.exit(1);
  });
