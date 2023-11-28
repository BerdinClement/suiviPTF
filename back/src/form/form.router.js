const router = require('express').Router();

const formController = require('./form.controller');
const isAdmin = require("../middleware/isAdmin");
const isConnected = require("../middleware/isConnected");
const isStudent = require("../middleware/isStudent");

router.get('/',[isConnected], formController.getAll);

router.get('/last', [isConnected], formController.getLast);

router.get('/:id',[isConnected], formController.getOne);

router.patch('/:id', [isConnected, isAdmin], formController.update);

router.post('/', [isConnected, isAdmin], formController.create);

router.delete('/:id', [isConnected, isAdmin], formController.delete);

router.get('/responses/:id', [isConnected, isStudent], formController.getUserResponseByForm);

module.exports = router;