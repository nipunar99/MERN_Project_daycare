const router = require("express").Router();
let Appointment = require("../models/Appointment_Model");

router.route("/appointment").get((req, res) => {
  Appointment.find()
    .then((Appointment) => res.json(Appointment))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Add Function
// router.route("/appointment/add").post((req, res) => {
//   const Aid = req.body.Aid;
//   const Date = req.body.Date;
//   const StartTime = req.body.StartTime;
//   const EndTime = req.body.EndTime;
//   const Pid = req.body.Pid;
//   const Cid = req.body.Cid;

//   const newAppointment = new Appointment({
//     Aid,
//     Date,
//     StartTime,
//     EndTime,
//     Pid,
//     Cid,
//   });

//   newAppointment.save().then(()=>{
//     res.json("Appointment  added!");
//   }).catch((err) => {
//     res.status(400).json("Error: " + err);
//   });
// })

router.route("/appointment/add").post((req,res)=>{
  const {Aid,Date,StartTime,EndTime,Pid,Cid} = req.body;

  const newAppointment = new Appointment({
          Aid,
          Date,
          StartTime,
          EndTime,
          Pid,
          Cid
  });

  newAppointment.save().then(()=>{
      res.json("Appointment Added!");
  }).catch((err)=>{
      console.log(err);
  })

})

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
      Appointment.Date = req.body.Date;
      Appointment.StartTime = req.body.StartTime;
      Appointment.EndTime = req.bodyEndTimes;
      Appointment.Pid = req.body.Pid;
      Appointment.Cid = req.body.Cid;
      
      Appointment.save()
        .then(() => res.json("Appointment updated!"))
        .catch((err) => res.status(400).json("Error : " + err));
    })
    .catch((err) => res.status(400).json("Error : " + err));
})


module.exports = router;
