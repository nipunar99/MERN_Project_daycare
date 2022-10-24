const router = require("express").Router();
let Guardian = require("../models/Gardian_Model");

router.route("/gardian").get((req, res) => {
  Guardian.find()
    .then((Guardian) => res.json(Guardian))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Add Function
router.route("/gardian/add").post((req, res) => {
  const Gid = req.body.Gid;
  const Name = req.body.Name;
  const Age = req.body.Age;
  const Address = req.body.Address;
  const Pno = req.body.Pno;
  const Children = req.body.Children;

  const newEvent = new Guardian({
    Gid,
    Name,
    Age,
    Address,
    Pno,
    Children,
  });

  newEvent
    .save()
    .then(() => res.json("Event  added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get Data
router.route("/gardian/:id").get((req, res) => {
  Guardian.findById(req.params.id)
    .then((Event) => res.json(Event))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Delete Data

router.route("/gardian/delelte/:id").delete((req, res) => {
  Guardian.findByIdAndDelete(req.params.id)
    .then(() => res.json("Event deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update data
router.route("/gardian/update/:id").post((req, res) => {
  Guardian.findById(req.params.id)
    .then((Event) => {
      Event.Gid = req.body.Gid;
      Event.Name = req.body.Name;
      Event.Age = req.body.Age;
      Event.Address = req.body.Address;
      Event.Pno = req.body.Pno;
      Event.Children = req.body.Children;
      
      Event.save()
        .then(() => res.json("Event updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
