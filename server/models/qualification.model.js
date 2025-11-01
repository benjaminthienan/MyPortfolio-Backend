import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
  title: String,
  firstname: String,
  lastname: String,
  email: String,
  completion: Date,
  description: String,
});

const Qualification = mongoose.model("Qualification", qualificationSchema);
export default Qualification;
