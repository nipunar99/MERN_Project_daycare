const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Database Schema
const GuardianSchema = new Schema(
  {
    Gid: { type: Number, required: true },
    Name: { type: String, required: true },
    Age: { type: String, required: true },
    Address: { type: String, required: true },
    Pno: { type: String, required: true },
    Children: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Guardian = mongoose.model("Guardian", GuardianSchema);

module.exports = Guardian;
