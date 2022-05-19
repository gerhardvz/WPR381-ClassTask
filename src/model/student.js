
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    stream:{
        type:String,
        required :true,
    },
    elective:{
        type:String,
        required:true,
    }

})

async  function addStudent(student,nextFunction){

    const nStudent = new studentSchema(
        student
    )
    try {
        const newStudent= await nStudent.save();
        newStudent(null,newStudent)
    }
    catch (err){
        nextFunction(err,null)
    }

}

async function viewStudents(nextFunction){
    try {
        const students = await studentSchema.find();
        nextFunction(null,students)
    } catch (err) {
        v
    }
}

async function viewStudent(studentId,nextFunction) {
    try {
        let student = await studentSchema.findById(studentId);
        if (student == null) {
            nextFunction(new Error("Cannot find Student"), null)
        }
        nextFunction(null, student)
    } catch (err) {
        nextFunction(err, null)
    }
}

function deleteStudent(studentId,nextFunction){
 viewStudent(studentId,(err,student)=>{
     try {
         student.remove()
         nextFunction(null,student)
     }catch (err){
         nextFunction(err,null)
     }
 })
}

async function updateStudent(student,nextFunction){
    viewStudent(student.id,async (err,oldStudent)=>{
        oldStudent.name = student.name
        oldStudent.stream=student.stream
        oldStudent.elective=student.elective
        try {
           const updatedStudent = await oldStudent.save()
            nextFunction(null,updatedStudent)
        }catch (err){
            nextFunction(err,null)
        }


    })
}

module.exports={addStudent,viewStudents,viewStudent,deleteStudent,updateStudent}