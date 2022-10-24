const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect("mongodb://localhost:27017/mernCRUD");
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });
const URL = process.env.ATLAS_URI;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!")
});

const Gardian_Router = require("./routes/Gardian_Event");
app.use(Gardian_Router);

const ChildRouter = require("./routes/ChildRoutes");
app.use(ChildRouter);

const Teacher_Router = require("./routes/TeacherRoutes");
app.use(Teacher_Router);

const Appointment_Router = require("./routes/AppointmentRoutes");
app.use(Appointment_Router);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
