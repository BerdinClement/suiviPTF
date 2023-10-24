const router = require('express').Router();

const formController = require('./form.controller');
const verifyAdmin = require("../middleware/verifyAdmin");
const isConnected = require("../middleware/isConnected");

router.get('/',[isConnected], formController.getAll);

router.get('/:id',[isConnected], formController.getOne);

router.patch('/:id', [isConnected, verifyAdmin], formController.update);

router.post('/', [isConnected, verifyAdmin], formController.create);

router.delete('/:id', [isConnected, verifyAdmin], formController.delete);

router.post('/question/:id', [isConnected, verifyAdmin], formController.addQuestion);

router.post('/questions/:id', [isConnected, verifyAdmin], formController.addManyQuestion);

router.delete('/question/:id/:questionId', [isConnected, verifyAdmin], formController.deleteQuestion);

router.post('/response/:id/:questionId', formController.addResponse);

module.exports = router;