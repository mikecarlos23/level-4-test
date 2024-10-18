const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    student_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student', 
        required: true 
    },
    course_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course', 
        required: true 
    },
    enrollment_date: { type: Date, default: Date.now },
    status: { 
        type: String, 
        enum: ['enrolled', 'completed', 'dropped'], 
        default: 'enrolled' 
    }
}, { timestamps: true });

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;