const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Databass Schema

const ChildSchema = new Schema(
  {
    Cid: { type: Number, required: true },
    Name: { type: String, required: true },
    Age: { type: String, required: true },
    Gender: {type:String, required: true},
    Address: { type: String, required: true },
    SpecialNotes: {type: String, required: false},
    Gid: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Child = mongoose.model("child", ChildSchema);

module.exports = Child;
