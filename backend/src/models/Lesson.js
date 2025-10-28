import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  image: { type: String }, // Lưu base64
});

const Lesson = mongoose.model("Lesson", lessonSchema);
export default Lesson;
