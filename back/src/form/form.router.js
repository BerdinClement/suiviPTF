const router = require('express').Router();

const formController = require('./form.controller');
const isAdmin = require("../middleware/isAdmin");
const isConnected = require("../middleware/isConnected");

router.get('/',[isConnected], formController.getAll);

router.get('/:id',[isConnected], formController.getOne);

router.patch('/:id', [isConnected, isAdmin], formController.update);

router.post('/', [isConnected, isAdmin], formController.create);

router.delete('/:id', [isConnected, isAdmin], formController.delete);

router.post('/question/:id', [isConnected, isAdmin], formController.addQuestion);

router.post('/questions/:id', [isConnected, isAdmin], formController.addManyQuestion);

router.delete('/question/:id/:questionId', [isConnected, isAdmin], formController.deleteQuestion);

router.post('/response/:formId/:questionId',[isConnected], formController.addResponse);

router.patch('/response/:id',[isConnected], formController.updateResponse);

module.exports = router;