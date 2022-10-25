const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Databass Schema

const AppointmentSchema = new Schema(
  {
    Aid: { type: Number, required: true },
    Date: { type: Date, required: true },
    StartTime: { type: String, required: true },
    EndTime: { type: String, required: true },
    Pid: { type: Number, required: true },
    Cid: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
