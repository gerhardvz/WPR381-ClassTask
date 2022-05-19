
function addStudent(student,nextFunction){

    //Verify Student

    //IF Error return error

    //If Correct return student obj

}

function viewStudents(nextFunction){

}

function viewStudent(studentName,nextFunction){

    viewStudents((err,students)=>{
        var student = students.find((value)=>{
            return value.name===studentName
        })
        nextFunction(err,student)
    })

}

function deleteStudent(student,nextFunction){

}
function updateStudent(student,nextFunction){

}

module.exports={addStudent,viewStudents,viewStudent,deleteStudent,updateStudent}