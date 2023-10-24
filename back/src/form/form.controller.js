const mongoose = require('mongoose')
const { Form, Question, Response, Student, User} = require('../model');
const {verify} = require("jsonwebtoken");

const formController = {
    getAll: async (req, res) => {
        Form.find().populate(['questions', 'responses']).then((form) => {
            res.status(200).json(form)
        }).catch((err) => {
            res.status(404).json(err)
        })
    },
    getOne: async (req, res) => {
        Form.findById(req.params.id).populate('questions').then((form) => {
            if (form) {
                res.status(200).json(form)
            } else {
                res.status(204).json({ message: 'Form not found' })
            }
        }).catch((err) => {
            res.status(404).json(err)
        })
    },
    create: async (req, res) => {
        const { title } = req.body
        const newForm = new Form({title})
        newForm.save().then((form) => {
            res.status(201).json(form)
        }).catch((err) => {
            res.status(404).json(err)
        })
    },
    delete: async (req, res) => {
        Form.findByIdAndDelete(req.params.id).then((form) => {
            if (form) {
                res.status(200).json({ message: 'Form deleted' })
            } else {
                res.status(204).json({ message: 'Form not found' })
            }
        }).catch((err) => {
            res.status(404).json(err)
        })
    },
    update: async (req, res) => {
        Form.updateOne({ _id: req.params.id }, req.body).then((form) => {
            if (form) {
                res.status(200).json(form)
            } else {
                res.status(204).json({ message: 'Form not found' })
            }
        } ).catch((err) => {
            res.status(404).json(err)
        })
    },
    addQuestion: async (req, res) => {
        const {text, type, required} = req.body
        Question.create({text, type, required}).then((question) => {
            Form.updateOne({ _id: req.params.id }, { $push: { questions: question._id } }).then((form) => {
                if (form) {
                    res.status(200).json(form)
                } else {
                    res.status(204).json({ message: 'Form not found' })
                }
            }).catch((err) => {
                res.status(404).json(err)
            })
        }).catch((err) => {
            res.status(404).json(err)
        })
    },
    addManyQuestion: async (req, res) => {
        const id = req.params.id
        const {questions} = req.body
        Question.insertMany(questions).then((questions) => {
            Form.updateOne({ _id: id }, { $push: { questions: questions } }).then((form) => {
                if (form) {
                    res.status(200).json(form)
                } else {
                    res.status(204).json({ message: 'Form not found' })
                }
            }).catch((err) => {
                res.status(404).json(err)
            })
        }).catch((err) => {
            res.status(404).json(err)
        })
    },
    deleteQuestion: async (req, res) => {
        const id = req.params.id
        const questionId = req.params.questionId
        Form.updateOne({ _id: id }, { $pull: { questions: questionId } }).then((form) => {
            if (form) {
                Question.findByIdAndDelete(questionId).then((question) => {
                    if (question) {
                        res.status(200).json({ message: 'Question deleted' })
                    } else {
                        res.status(204).json({ message: 'Question not found' })
                    }
                }).catch((err) => {
                    res.status(404).json(err)
                })
            } else {
                res.status(204).json({ message: 'Form not found' })
            }
        }).catch((err) => {
            res.status(404).json(err)
        })
    },
    addResponse: async (req, res) => {
        const token = req.cookies.token
        if (!token) return res.status(401).json({ message: 'No token' })
        const decodedToken = verify(token, process.env.JWT_SECRET)
        const userId = decodedToken._id
        const {id, questionId} = req.params
        const student = Student.findOne({user: userId}).then((student) => {
            Response.create({student: student._id, form: id, question: questionId}).then((response) => {
                User.updateOne({ _id: userId }, { $push: { responses: response._id } }).then((user) => {
                    if (user) {
                        //res.status(200).json(user)
                    } else {
                        res.status(204).json({ message: 'User not found' })
                    }
                }).catch((err) => {
                    res.status(404).json(err)
                })
                Form.updateOne({ _id: id }, { $push: { responses: response._id } }).then((form) => {
                    if (form) {
                        //res.status(200).json(form)
                    } else {
                        res.status(204).json({ message: 'Form not found' })
                    }
                }).catch((err) => {
                    res.status(404).json(err)
                })
                res.status(200).json("ok")
            }).catch((err) => {
                res.status(404).json(err)
            })
        }).catch((err) => {
            res.status(404).json(err)
        })
    },
}

module.exports = formController