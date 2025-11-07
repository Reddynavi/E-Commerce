import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config(); // ✅ Load environment variables first
connectDB();     // ✅ Connect to MongoDB

const app = express();

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Static files setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// ✅ Server startup
const PORT = process.env.PORT || 5000;
console.log("🟢 Starting server...");
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
