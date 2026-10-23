const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNo: {
        type: Number
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
});

// Create the Student model
const student = mongoose.model("Student", studentSchema);

module.exports = { student };