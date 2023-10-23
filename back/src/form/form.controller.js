const mongoose = require('mongoose')
const { Form, Response } = require('../model');

const formController = {
    getAll: async (req, res) => {
        Form.find().then((form) => {
            res.status(200).json(form)
        }).catch((err) => {
            res.status(404).json(err)
        })
    },
    getOne: async (req, res) => {
        Form.findById(req.params.id).then((form) => {
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
        const newForm = new Form(req.body)
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
    }
}

module.exports = formController