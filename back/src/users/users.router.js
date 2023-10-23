const router = require('express').Router();

const usersController = require('./users.controller');
const verifyAdmin = require("../middleware/verifyAdmin");

router.patch('/:id', usersController.updateUser);

router.post('/student',verifyAdmin, usersController.createStudent);
router.get('/student', usersController.getAllStudents);
router.patch('/student/:id', usersController.updateStudent);

router.post('/tutor', verifyAdmin, usersController.createTutor);
router.get('/tutor', usersController.getAllTutors);

router.get('/profile', usersController.profile)
router.post('/login', usersController.login);
router.post('/logout', usersController.logout)

router.delete('/:id', verifyAdmin, usersController.delete);
router.put('/:id', verifyAdmin, usersController.activate);
router.get('/desactivated', verifyAdmin, usersController.getAllDesactivated);
router.patch('/password/:id', usersController.changePassword);

module.exports = router;