import mongoose, { Schema } from "mongoose";

const teacherSchema = new Schema({
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
  id: {
    type: String,
    required: [true, "ID is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const Teachers =
  mongoose.models.Teachers || mongoose.model("Teachers", teacherSchema);

export default Teachers;
