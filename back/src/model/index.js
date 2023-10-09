const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    email: { type: String, unique: true },
    firstName: String,
    lastName: String,
    phone: String,
    password: String,
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    active: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false }
});

const tutorSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

const studentSchema = new mongoose.Schema({
    ine: { type: String, unique: true },
    num_etu: { type: String, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' },
    responses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Response' }]
});

const formSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    title: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    responses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Response' }]
});

const questionSchema = new mongoose.Schema({
    text: String,
    type: String,
    form: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' }
});

const responseSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    text: String,
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    form: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' }
});

const User = mongoose.model('User', userSchema);
const Tutor = mongoose.model('Tutor', tutorSchema);
const Student = mongoose.model('Student', studentSchema);
const Form = mongoose.model('Form', formSchema);
const Question = mongoose.model('Question', questionSchema);
const Response = mongoose.model('Response', responseSchema);

module.exports = {
    User,
    Tutor,
    Student,
    Form,
    Question,
    Response
};
