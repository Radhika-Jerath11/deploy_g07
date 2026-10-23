const { student: Student, student } = require('../models/studentModel');

// Create student
const createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);

        res.status(201).json({
            message: "Student created successfully",
            student: newStudent
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Error creating student",
            error: err.message
        });
    }
};

const getStudents = async(req,res)=>{
    try{
        const data = await student.find()
        res.send({
            "message":"Students fetched successfully",
            data
        })
    }
    catch(error){
        res.send(error);
    }
}

const getSingleStudent = async(req,res)=>{
    try{
        const id=req.params.id
        const data = await student.findById(id)
        res.send({
            "message":"User fetched successfully",
            data
        })
    }
    catch(error){
        res.send(error)
    }
}

const deleteStudent = async (req, res) => {
    try {
        const id=req.params.id
        const data = await Student.findByIdAndDelete(id);

        res.send({
            "message":"User deleted",
            data
        })
    } catch (error) {
        res.send(error)
    }
};

const updateStudent = async(req,res)=>{
    try{
        const id= req.params.id
        const data = await student.findByIdAndUpdate(id);

        res.send({
            "message":"User Updated",
            data
        })
    }catch(error){
        res.send(error)
    }
}

module.exports = { createStudent,getStudents ,getSingleStudent,deleteStudent,updateStudent};