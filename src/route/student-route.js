var express = require("express")
var studentController = require("../controller/student-controller")
var router = express.Router()


router.post("/add-student",studentController.addStudent)
router.get("/view-all-students",studentController.viewStudents)
router.get("/view-student",studentController.viewStudent)
router.post("/update-student",studentController.updateStudent)
router.delete("/delete-student",studentController.deleteStudent)


module.exports=router