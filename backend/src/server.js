import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./db/connect.js";
import lessonRoutes from "./routes/lessonRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

// Kết nối MongoDB
connectDB();

// Routes
app.use("/api/lessons", lessonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
