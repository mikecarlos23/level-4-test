const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    instructor_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    instructor_contact: { type: Number },
    instructor_address:{type:String}
    
}, { timestamps: true });

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;