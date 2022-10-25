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
    child.findById(req.params.id)
      .then((child) => {
        child.Cid = req.body.Cid;
        child.Name = req.body.Name;
        child.Age = req.body.Age;
        child.Gender = req.body.Gender;
        child.Address = req.body.Address;
        child.SpecialNotes = req.body.SpecialNotes;
        child.Gid = req.body.Gid;
        
        child.save()
          .then(() => res.json("Event updated! "+child))
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