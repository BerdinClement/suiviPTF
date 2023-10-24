const router = require('express').Router();

const usersController = require('./users.controller');
const verifyAdmin = require("../middleware/verifyAdmin");
const isConnected = require("../middleware/isConnected");

router.patch('/:id',[isConnected], usersController.updateUser);

router.post('/student',[isConnected, verifyAdmin], usersController.createStudent);
router.get('/student',[isConnected], usersController.getAllStudents);
router.patch('/student/:id',[isConnected], usersController.updateStudent);

router.post('/tutor', [isConnected, verifyAdmin], usersController.createTutor);
router.get('/tutor',[isConnected], usersController.getAllTutors);

router.get('/profile',[isConnected], usersController.profile)
router.post('/login', usersController.login);
router.post('/logout',[isConnected], usersController.logout)

router.delete('/:id', [isConnected, verifyAdmin], usersController.delete);
router.patch('/activate/:id', [isConnected, verifyAdmin], usersController.activate);
router.get('/desactivated', [isConnected, verifyAdmin], usersController.getAllDesactivated);
router.patch('/password/:id',[isConnected], usersController.changePassword);

module.exports = router;