const {createStudent, getStudents, getSingleStudent, deleteStudent, updateStudent}=require('../controllers/studentController')
const express=require('express');
const router=express.Router();

router.post('/students', createStudent);
router.get("/students",getStudents);
router.get("/students/:id",getSingleStudent)
router.delete("/students/:id",deleteStudent)
router.put("/students/:id",updateStudent)
module.exports={router}