const router = require('express').Router();

const formController = require('./form.controller');
const verifyAdmin = require("../middleware/verifyAdmin");

router.get('/', formController.getAll);

router.get('/:id', formController.getOne);

router.patch('/:id', verifyAdmin, formController.update);

router.post('/', verifyAdmin, formController.create);

router.delete('/:id', verifyAdmin, formController.delete);

router.post('/question/:id', verifyAdmin, formController.addQuestion);

router.post('/questions/:id', verifyAdmin, formController.addManyQuestion);

router.delete('/question/:id/:questionId', verifyAdmin, formController.deleteQuestion);

router.post('/response/:id/:questionId', formController.addResponse);

module.exports = router;