var student=require("../model/student")

exports.addStudent = (req,res)=>{

    var name = req.body.name;
    var stream = req.body.name;
    var elective = req.body.name;

    if (name.empty||stream.empty||elective.empty)
    student.addStudent({name:name,stream:stream,elective:elective},(err,data)=>{
    if (err!==null){
        res.send({err:err.toString()})
        return
    }

    res.send({mesg:"Student Created",student:data})

    })
}
exports.viewStudents = (req,res)=>{
    student.viewStudents((err,data)=>{
        if (err!==null){
            res.send({err:err.toString()})
            return
        }

        res.send({studentList:data})
    })

}
exports.viewStudent = (req,res)=>{
    var param = req.query
    student.viewStudent(param[name],(err,data)=>{
        if (err!==null){
            res.send({err:err.toString()})
            return
        }

        res.send({student:data})
    })

}
exports.updateStudent = (req,res)=>{
    var name = req.body.name;
    var stream = req.body.name;
    var elective = req.body.name;
    student.updateStudent({name:name,stream:stream,elective:elective},(err,data)=>{
        if (err!==null){
            res.send({err:err.toString()})
            return
        }

        res.send({msg:"Updated student",data:data})

    })
}
exports.deleteStudent = (req,res)=>{
    var name = req.body.name;
    var stream = req.body.name;
    var elective = req.body.name;
    student.deleteStudent({name:name,stream:stream,elective:elective},(err,data)=>{
        if (err!==null){
            res.send({err:err.toString()})
            return
        }

        res.send({msg:"deleted student",data:data})

    })
}





