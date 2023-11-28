const mongoose = require('mongoose')
const { Form, Question, Response, Student, User} = require('../model');
const {verify} = require("jsonwebtoken");
const Logger = require('../utils/logger')
const logger = Logger.getInstance()

const responsesController = {
    getAll: async (req, res) => {
        try {
            const responses = await Response.find()
            res.json(responses)
        } catch (err) {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        }
    },
    getOne: async (req, res) => {
        const {id} = req.params
        try {
            const response = await Response.findById(id)
            res.json(response)
        } catch (err) {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        }
    },
    createAndAffect: async (req, res) => {
        const {questionId} = req.params;
        const token = req.headers.authorization.split(' ')[1].replace(/"/g, '')
        if (!token) {
            logger.error(`${req.method} ${req.originalUrl} Unauthorized`)
            res.status(401).json({error: "Unauthorized"})
        }
        const decodedToken = verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({id: decodedToken.id}).populate('student')
        const student = user.student
        const checkResponse = await Response.findOne({student: student._id, question: questionId})
        if (checkResponse) {
            logger.error(`${req.method} ${req.originalUrl} Response already exists`)
            res.status(400).json({message: "Response already exists"})
        }
        Response.create({student: student._id, question: questionId, text: req.body.text}).then((response) => {
            Student.findByIdAndUpdate(student._id, {$push: {responses: response}}).then().catch((err) => {
                logger.error(`${req.method} ${req.originalUrl} ${err}`)
            })
            Question.findByIdAndUpdate(questionId, {$push: {responses: response}}).then().catch((err) => {
                logger.error(`${req.method} ${req.originalUrl} ${err}`)
            })
            logger.info(`${req.method} ${req.originalUrl} Response created`)
            return res.status(201).json({message: "Response created"})
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err)
        })
    },
}

module.exports = responsesController;