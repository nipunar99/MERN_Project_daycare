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
    .then(() => res.json("Guardian  added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get Data
router.route("/gardian/:id").get((req, res) => {
  Guardian.findById(req.params.id)
    .then((Guardian) => res.json(Guardian))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Delete Data

router.route("/gardian/delelte/:id").delete((req, res) => {
  Guardian.findByIdAndDelete(req.params.id)
    .then(() => res.json("Guardian deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update data
router.route("/gardian/update/:id").post((req, res) => {
  Guardian.findById(req.params.id)
    .then((Guardian) => {
      Guardian.Gid = req.body.Gid;
      Guardian.Name = req.body.Name;
      Guardian.Age = req.body.Age;
      Guardian.Address = req.body.Address;
      Guardian.Pno = req.body.Pno;
      Guardian.Children = req.body.Children;
      
      Guardian.save()
        .then(() => res.json("Guardian updated!"))
        .catch((err) => res.status(400).json("Error : " + err));
    })
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
