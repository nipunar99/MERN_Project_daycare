const router = require("express").Router();
let Appointment = require("../models/Appointment_Model");

router.route("/appointment").get((req, res) => {
  Appointment.find()
    .then((Appointment) => res.json(Appointment))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Add Function
router.route("/appointment/add").post((req, res) => {
  const Aid = req.body.Aid;
  const Name = req.body.Name;
  const Age = req.body.Age;
  const Address = req.body.Address;
  const Pno = req.body.Pno;
  const Children = req.body.Children;

  const newAppointment = new Appointment({
    Aid,
    Name,
    Age,
    Address,
    Pno,
    Children,
  });

  newAppointment
    .save()
    .then(() => res.json("Appointment  added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get Data
router.route("/appointment/:id").get((req, res) => {
  Appointment.findById(req.params.id)
    .then((Appointment) => res.json(Appointment))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Delete Data

router.route("/appointment/delelte/:id").delete((req, res) => {
  console.log("Awa aWa hutaa");
  Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Appointment deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update data
router.route("/appointment/update/:id").post((req, res) => {
  Appointment.findById(req.params.id)
    .then((Appointment) => {
      Appointment.Aid = req.body.Aid;
      Appointment.Name = req.body.Name;
      Appointment.Age = req.body.Age;
      Appointment.Address = req.body.Address;
      Appointment.Pno = req.body.Pno;
      Appointment.Children = req.body.Children;
      
      Appointment.save()
        .then(() => res.json("Appointment updated!"))
        .catch((err) => res.status(400).json("Error : " + err));
    })
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
