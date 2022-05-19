var express = require("express")
var studentController = require("../controller/student-controller")
var router = express.Router()


router.post("/add-student",studentController.addStudent)
router.get("/view-all-students",studentController.addStudent)
router.get("/view-single",studentController.addStudent)
router.post("/update-record",studentController.addStudent)
router.delete("/delete-record",studentController.addStudent)


module.exports=router