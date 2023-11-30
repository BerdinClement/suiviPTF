const router = require('express').Router();

const usersController = require('./users.controller');
const isAdmin = require("../middleware/isAdmin");
const isConnected = require("../middleware/isConnected");
const isTutor = require("../middleware/isTutor");

router.patch('/:id',[isConnected], usersController.updateUser);

router.post('/student',[isConnected, isAdmin], usersController.createStudent);
router.get('/student',[isConnected], usersController.getAllStudents);
router.get('/student/:id',[isConnected, isTutor], usersController.getAllStudentsByTutor);
router.patch('/student/:id',[isConnected], usersController.updateStudent);

router.post('/tutor', [isConnected, isAdmin], usersController.createTutor);
router.get('/tutor',[isConnected], usersController.getAllTutors);
router.put('/tutor/students/:id',[isConnected, isAdmin], usersController.affectStudents);
router.patch('/tutor/students/:id',[isConnected, isAdmin], usersController.desaffectStudents);

router.get('/profile',[isConnected], usersController.profile)
router.post('/login', usersController.login);
router.post('/logout',[isConnected], usersController.logout)

router.delete('/:id', [isConnected, isAdmin], usersController.delete);
router.patch('/activate/:id', [isConnected, isAdmin], usersController.activate);
router.get('/desactivated', [isConnected, isAdmin], usersController.getAllDesactivated);
router.patch('/password/:id',[isConnected], usersController.changePassword);

module.exports = router;