const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    firstName: String,
    lastName: String,
    phone: String,
    password: { type: String, required: true },
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    active: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false }
}, {
    timestamps: true
});

const tutorSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
},{
    timestamps: true
});

const studentSchema = new mongoose.Schema({
    ine: { type: String, unique: true },
    num_etu: { type: String, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true },
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' },
    responses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Response' }]
},{
    timestamps: true
});

const formSchema = new mongoose.Schema({
    title: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    date: Date,
}, {
    timestamps: true
});

const questionSchema = new mongoose.Schema({
    text: {required: true, type: String},
    type: {default: 'text', type: String, enum: ['text', 'number', 'date', 'checkbox', 'radio']},
    required: { type: Boolean, default: false },
    form: { type: mongoose.Schema.Types.ObjectId, ref: 'Form' },
    responses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Response' }]
},{
    timestamps: true
});

const responseSchema = new mongoose.Schema({
    text: String,
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
},{
    timestamps: true
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
