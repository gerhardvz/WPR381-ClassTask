var student=require("../model/student")


//page to use to add student and view student
exports.studentPage = (req,res)=>{

    var params = req.query
    if (params!=={}){
        //return empty form
    }
    else{
        //return filled form
    }

}
//Page to view all students
exports.studentListPage = (req,res)=>{
//return Page with List of students
}


exports.menu = (req,res)=>{

    var obj = {Pages:{
            ToAddStudent:"/add-record",
            ToViewStudents:"/view-all",
            ToViewStudent:"/view-single?name=studentName",
            ToUpdateStudents:"/update-record",
            ToDeleteStudents:"/delete-record"}
    }
    res.send(obj)
}