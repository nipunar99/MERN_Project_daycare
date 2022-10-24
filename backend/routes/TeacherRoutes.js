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
router.route("/teacher/update/:id").put((req,res) => {
    const teacherId = req.params.id;
    const {Tid,Name,Age,Gender,Address,Qualification,GroupNo} = req.body;

    const updateTeacher = new teacher({
        Tid,
        Name,
        Age,
        Gender,
        Address,
        Qualification,
        GroupNo
    });


    const update = teacher.findByIdAndUpdate(teacherId,updateTeacher)
    .then(()=>{
        res.json("Teacher Updated!")
        console.log(update)
    }).catch((err)=>{
        res.status(400).json("ErroR: "+err);
    })
})

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