const studentSchema = new mongoose.Schema({
    student_name: { type: String, required: true },
    student_contact: { type: Number },
    student_date_of_birth: { type: Date, required: true }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;