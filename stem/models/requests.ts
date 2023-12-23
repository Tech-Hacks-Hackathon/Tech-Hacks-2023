import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
    minLength: [3, "Name must be atleast 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  code: {
    type: String,
    required: [true, "ID is required"],
  },
});

const Courses =
  mongoose.models.Courses || mongoose.model("Courses", courseSchema);

export default Courses;
