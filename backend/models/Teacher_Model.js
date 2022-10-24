const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Databass Schema

const TeacherSchema = new Schema(
  {
    Tid: { type: Number, required: true },
    Name: { type: String, required: true },
    Age: { type: String, required: true },
    Gender: {type:String, required: true},
    Address: { type: String, required: true },
    Qualification: {type: String, required: false},
    GroupNo: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Teacher = mongoose.model("teacher", TeacherSchema);

module.exports = Teacher;
