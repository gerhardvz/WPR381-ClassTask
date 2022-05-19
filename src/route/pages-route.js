var express = require("express")
var studentController = require("../controller/student-controller")
var router = express.Router()

router.get("/",studentController.menu)


router.get("/add-record",studentController.studentPage)
router.get("/view-all",studentController.studentListPage)
router.get("/view-single",studentController.addStudent)