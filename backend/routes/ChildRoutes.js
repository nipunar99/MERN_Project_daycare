const router = require("express").Router();
const child = require("../models/Child_Model")


//CREATE
router.route("/child/add").post((req,res)=>{
    const {Cid,Name,Age,Gender,Address,SpecialNotes,Gid} = req.body;

    const newChild = new child({
        Cid,
        Name,
        Age,
        Gender,
        Address,
        SpecialNotes,
        Gid
    });

    newChild.save().then(()=>{
        res.json("Child Added!");
    }).catch((err)=>{
        console.log(err);
    })

})

//UPDATE
router.route("/child/update/:id").post((req, res) => {
    Guardian.findById(req.params.id)
      .then((Event) => {
        Event.Cid = req.body.Gid;
        Event.Name = req.body.Name;
        Event.Age = req.body.Age;
        Event.Gender = req.body.Gender;
        Event.Address = req.body.Address;
        Event.SpecialNotes = req.body.SpecialNotes;
        Event.Gid = req.body.Gid;
        
        Event.save()
          .then(() => res.json("Event updated!"))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });

//DELETE
router.route("/child/delete/:id").delete((req,res)=>{
    const childId = req.params.id;

    child.findByIdAndDelete(childId)
    .then(()=>{
        res.json("Child Deleted.")
    }).catch((err)=>{
        res.status(400).json("Error: "+err);
    })
})

//READ
router.route("/child").get((req,res)=>{
    child.find().then((child)=>{
        res.json(child)
    }).catch((err)=>{
        res.status(400).json("Error: "+err)
    })
})

router.route("/child/:id").get((req, res) => {
    child.findById(req.params.id)
      .then((Event) => res.json(Event))
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;