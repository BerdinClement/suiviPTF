const router = require('express').Router();

const fromController = require('./form.controller');
const verifyAdmin = require("../middleware/verifyAdmin");

router.get('/', fromController.getAll);

router.get('/:id', fromController.getOne);

router.patch('/:id', fromController.update);

router.post('/', verifyAdmin, fromController.create);

router.delete('/:id', verifyAdmin, fromController.delete);

module.exports = router;