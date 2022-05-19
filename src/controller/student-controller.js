var student=require("../model/student")


exports.addStudent = (req,res)=>{

    console.log(req)
    var name = req.body.name;
    var stream = req.body.stream;
    var elective = req.body.elective;

    if (name.empty||stream.empty||elective.empty)
    {

    }
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
    console.log(req)
    student.viewStudent(param['id'],(err,data)=>{
        if (err!==null){
            res.send({err:err.toString()})
            return
        }

        res.send({student:data})
    })

}
exports.updateStudent = (req,res)=>{
    var id = req.query['id']
    var name = req.body.name;
    var stream = req.body.stream;
    var elective = req.body.elective;
    student.updateStudent({id:id,name:name,stream:stream,elective:elective},(err,data)=>{
        if (err!==null){
            res.send({err:err.toString()})
            return
        }

        res.send({msg:"Updated student",data:data})

    })
}
exports.deleteStudent = (req,res)=>{
    var id = req.body.id;

    student.deleteStudent(id,(err,data)=>{
        if (err!==null){
            res.send({err:err.toString()})
            return
        }

        res.send({msg:"deleted student",data:data})

    })
}





