import express from "express";
import Lesson from "../models/Lesson.js";
const router = express.Router();

/* 📤 Lấy tất cả bài học */
router.get("/", async (req, res) => {
  const lessons = await Lesson.find();
  res.json(lessons);
});

/* 📥 Thêm bài học mới */
router.post("/", async (req, res) => {
  try {
    const { title, category, image } = req.body;
    const newLesson = new Lesson({ title, category, image });
    await newLesson.save();
    res.json({ message: "Lesson added", newLesson });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
