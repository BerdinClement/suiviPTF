const mongoose = require('mongoose')
const { Form, Question, Response, Student, User} = require('../model');
const {verify} = require("jsonwebtoken");
const Logger = require('../utils/logger')
const logger = Logger.getInstance()

const formController = {
    getAll: async (req, res) => {
        Form.find().populate('questions').then((form) => {
            res.status(200).json(form)
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
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
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        })
    },
    create: async (req, res) => {
        const { title, date } = req.body
        const newForm = new Form({title, date})
        newForm.save().then((form) => {
            res.status(201).json(form)
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
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
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
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
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        })
    },
    getUserResponseByForm: async (req, res) => {
        const {id} = req.params;
        const token = req.headers.authorization.split(' ')[1].replace(/"/g, '');
        if (!token) {
            logger.error(`${req.method} ${req.originalUrl} Unauthorized`)
            res.status(401).json({error: "Unauthorized"})
        }
        const decodedToken = verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({_id: decodedToken._id}).populate('student')
        const form = Form.findById(id, {options: {strictPopulate: false}}).populate({
            path: 'questions',
            populate: {
                path: 'responses',
                model: 'Response',
                populate: {
                    path: 'student',
                    model: 'Student',
                    match: { _id: user.student._id }
                }
            }
        }).then((form) => {
            if (form) {
                res.status(200).json(form)
            } else {
                res.status(204).json({ message: 'Form not found' })
            }
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        })
    },
    getLast : async (req, res) => {
        Form.find().sort({date: -1}).limit(5).then((form) => {
            if (form) {
                res.status(200).json(form)
            } else {
                res.status(204).json({ message: 'Form not found' })
            }
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        })
    }
}

module.exports = formController