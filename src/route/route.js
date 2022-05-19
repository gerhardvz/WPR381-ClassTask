var express = require("express")
var router = express.Router()

var studentRoute = require("./student-route")
// var pageRoute = require("./pages-route")


router.use('/api/student',studentRoute)
// router.use('/',pageRoute)

router.all("*",(req,res)=>{
    res.redirect("/404")
    // res.send("404: Page Not Found")
})

module.exports=router