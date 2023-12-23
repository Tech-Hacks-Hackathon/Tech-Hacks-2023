import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
    minLength: [3, "Name must be atleast 3 characters"],
  },
  teacher: {
    type: String,
    required: [true, "Email is required"],
  },
  teacherId: {
    type: String,
    required: [true, "ID is required"],
  },
  code: {
    type: String,
    required: [true, "tag is required"],
  },
});

const Courses =
  mongoose.models.Courses || mongoose.model("Courses", courseSchema);

export default Courses;
