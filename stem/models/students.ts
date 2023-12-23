import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
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
  roll: {
    type: String,
    required: [true, "Roll number is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const Students =
  mongoose.models.Students || mongoose.model("Students", studentSchema);

export default Students;
