const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    course_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course', 
        required: true 
    },
    instructor_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Instructor', 
        required: true 
    },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    
}, { timestamps: true });

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;