import mongoose, { Schema } from "mongoose";

const projStudentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
    minLength: [3, "Name must be atleast 3 characters"],
  },
  projId: {
    type: String,
    required: [true, "ID is Required"],
  },
});

const ProjStudents =
  mongoose.models.ProjStudents ||
  mongoose.model("ProjStudents", projStudentSchema);

export default ProjStudents;
