const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    course_name: { type: String, required: true },
    course_description: { type: String, required: true },
    duration: { type: Number, required: true }, 
    instructor: { type: String, required: true },
    schedule: { type: Date, required: true }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;




