const router = require("express").Router();
const teacher = require("../models/Teacher_Model")


//CREATE
router.route("/teacher/add").post((req,res)=>{
    const {Tid,Name,Age,Gender,Address,Qualification,GroupNo} = req.body;

    const newTeacher = new teacher({
        Tid,
        Name,
        Age,
        Gender,
        Address,
        Qualification,
        GroupNo
    });

    newTeacher.save().then(()=>{
        res.json("Teacher Added!");
    }).catch((err)=>{
        console.log(err);
    })

})

//UPDATE
router.route("/teacher/update/:id").post((req, res) => {
    teacher.findById(req.params.id)
      .then((teacher) => {
        teacher.Tid = req.body.Tid;
        teacher.Name = req.body.Name;
        teacher.Age = req.body.Age;
        teacher.Gender = req.body.Gender;
        teacher.Address = req.body.Address;
        teacher.Qualification = req.body.Qualification;
        teacher.GroupNo = req.body.GroupNo;
        
        teacher.save()
          .then(() => res.json("Event updated! "+teacher))
          .catch((err) => res.status(400).json("Error : " + err));
      })
      .catch((err) => res.status(400).json("Error : " + err));
  });


//DELETE
router.route("/teacher/delete/:id").delete((req,res)=>{
    const teacherId = req.params.id;

    teacher.findByIdAndDelete(teacherId)
    .then(()=>{
        res.json("Teacher Deleted.")
    }).catch((err)=>{
        res.status(400).json("Error: "+err);
    })
})

//READ
router.route("/teacher").get((req,res)=>{
    teacher.find().then((teacher)=>{
        res.json(teacher)
    }).catch((err)=>{
        res.status(400).json("Error: "+err)
    })
})

router.route("/teacher/:id").get((req, res) => {
    teacher.findById(req.params.id)
      .then((teacher) => res.json(teacher))
      .catch((err) => res.status(400).json("Error: " + err));
  });

module.exports = router;