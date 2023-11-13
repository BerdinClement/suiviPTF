const mongoose = require('mongoose')
const { Form, Question, Response, Student, User} = require('../model');
const Logger = require('../utils/logger')
const logger = Logger.getInstance()

const questionsController = {
    addQuestion: async (req, res) => {
        const {text, type, required} = req.body
        Question.create({text, type, required}).then((question) => {
            Form.updateOne({ _id: req.params.formId }, { $push: { questions: question._id } }).then((form) => {
                if (form) {
                    res.status(200).json({message: "Question added"})
                } else {
                    res.status(204).json({ message: 'Form not found' })
                }
            }).catch((err) => {
                logger.error(`${req.method} ${req.originalUrl} ${err}`)
                res.status(404).json(err)
            })
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        })
    },
    addManyQuestion: async (req, res) => {
        const id = req.params.formId
        const {questions} = req.body
        Question.insertMany(questions).then((questions) => {
            Form.updateOne({ _id: id }, { $push: { questions: questions } }).then((form) => {
                if (form) {
                    res.status(200).json(form)
                } else {
                    res.status(204).json({ message: 'Form not found' })
                }
            }).catch((err) => {
                logger.error(`${req.method} ${req.originalUrl} ${err}`)
                res.status(404).json(err)
            })
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        })
    },
    deleteQuestion: async (req, res) => {
        const id = req.params.id;
        const reponses = await Response.find({question: id})
        if(!reponses){
            res.status(404).json({message: "Question not found"})
        }
        return res.status(200).json(reponses)
    },
    updateQuestion: async (req, res) => {
        const { id } = req.params.id
        const {text, type, required} = req.body
        Question.findByIdAndUpdate(id, {text, type, required}).then((question) => {
            if (question) {
                res.status(200).json(question)
            } else {
                res.status(204).json({ message: 'Question not found' })
            }
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        })
    },
    getQuestionsByFormId: async (req, res) => {
        const { formId } = req.params.formId
        Form.findById(formId).populate('questions').then((form) => {
            if (form) {
                res.status(200).json(form.questions)
            } else {
                res.status(204).json({ message: 'Form not found' })
            }
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        })
    },
    getAll: async (req,res) => {
        Question.find().populate('responses').then((questions) => {
            if (questions) {
                res.status(200).json(questions)
            } else {
                res.status(204).json({ message: 'Questions not found' })
            }
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        })
    }
}

module.exports = questionsController;