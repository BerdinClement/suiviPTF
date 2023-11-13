const router = require('express').Router();

const responsesController = require('./responses.controller');
const isAdmin = require("../middleware/isAdmin");
const isConnected = require("../middleware/isConnected");
const isStudent = require("../middleware/isStudent");

router.get('/', [isConnected], responsesController.getAll);
router.get('/:id', [isConnected], responsesController.getOne);

router.post('/:questionId', [isConnected, isStudent], responsesController.createAndAffect);

module.exports = router;