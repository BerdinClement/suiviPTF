const router = require('express').Router();

const questionsController = require('./questions.controller');
const isAdmin = require("../middleware/isAdmin");
const isConnected = require("../middleware/isConnected");

router.post('/:formId', [isConnected, isAdmin], questionsController.addQuestion);

router.post('/:formId', [isConnected, isAdmin], questionsController.addManyQuestion);

router.delete('/:id', [isConnected, isAdmin], questionsController.deleteQuestion);

router.patch('/:id', [isConnected, isAdmin], questionsController.updateQuestion);

router.get('/:formId', [isConnected], questionsController.getQuestionsByFormId);

router.get('/', [isConnected, isAdmin], questionsController.getAll);

module.exports = router;