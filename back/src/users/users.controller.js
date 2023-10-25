const mongoose = require('mongoose');
const {User, Student, Tutor} = require('../model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET

const Logger = require('../utils/logger');
const logger = Logger.getInstance();

const usersController = {
    createStudent: async (req, res) => {
        const {email, password, firstName, lastName, phone} = req.body
        const {ine, num_etu} = req.body.student
        const newUser = new User({email, password, firstName, lastName, phone});
        newUser.password = await bcrypt.hashSync(newUser.password, bcryptSalt);
        newUser.save().then((user) => {
            const newStudent = new Student({
                user: user._id,
                ine: ine,
                num_etu: num_etu
            });
            newStudent.save().then((student) => {
                user.student = student._id;
                user.save().then((user) => {
                    res.status(201).json(user);
                }).catch((err) => {
                    logger.error(`${req.method} ${req.originalUrl} ${err}`)
                    res.status(404).json(err);
                });
            }).catch((err) => {
                logger.error(`${req.method} ${req.originalUrl} ${err}`)
                res.status(404).json(err);
            });
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err);
        });
    },
    createTutor: async (req, res) => {
        const {email, password, firstName, lastName, phone} = req.body
        const newUser = new User({email, password, firstName, lastName, phone});
        newUser.password = await bcrypt.hashSync(newUser.password, bcryptSalt);
        newUser.save().then((user) => {
            const newTutor = new Tutor({
                user: user._id
            });
            newTutor.save().then((tutor) => {
                user.tutor = tutor._id;
                user.save().then((user) => {
                    res.status(201).json(user);
                }).catch((err) => {
                    logger.error(`${req.method} ${req.originalUrl} ${err}`)
                    res.status(404).json(err);
                });
            }).catch((err) => {
                logger.error(`${req.method} ${req.originalUrl} ${err}`)
                res.status(404).json(err);
            });
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err);
        });
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        User.findOne({ email }).then((user) => {
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            } else {
                const isValidPassword = bcrypt.compareSync(password, user.password);
                if (isValidPassword) {
                    const type = user.tutor ? 'tutor' : 'student';
                    jwt.sign({email: user.email, _id: user._id, admin: user.isAdmin, type}, jwtSecret, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
                        if (err) {
                            res.status(500).json({ message: 'Internal server error' });
                        } else {
                            logger.info(`User ${user.email} logged in`);
                            res.cookie('token', token).status(200).json({ token: token, user });
                        }
                    });
                } else {
                    res.status(404).json({ message: 'Invalid password' });
                }
            }
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err);
        });
    },
    profile: async (req, res) => {
        const {token} = req.cookies;
        if(token){
            jwt.verify(token, jwtSecret, {}, async (err, userData) => {
                if(err) throw err
                const user = await User.findById(userData._id)
                user.password = undefined
                res.json({token, user})
            })
        } else {
            res.status(204).json(null)
        }
    },
    logout: async (req, res) => {
        res.cookie('token','').status(204).json(null)
    },
    getAllStudents: async (req, res) => {
        const students = await Student.find().populate({path: 'user', match: {active: true}});
        if (!students) {
            res.status(404).json({ message: 'Students not found' });
        }
        students.forEach(student => {
            if (!student.user) {
                students.splice(students.indexOf(student), 1);
            }
        });
        res.status(200).json(students);
    },
    getAllTutors: async (req, res) => {
        const tutors = await Tutor.find().populate({path: 'user', match: {active: true}});
        if (!tutors) {
            res.status(404).json({ message: 'Tutors not found' });
        }
        res.status(200).json(tutors);
    },
    updateUser: async (req, res) => {
        const id = req.params.id;
        const { email, firstName, lastName, phone } = req.body
        console.log(req.body, id)
        User.updateOne({ _id: id }, { email, firstName, lastName, phone }).then((user) => {
            res.status(200).json(user);
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err);
        });
    },
    updateStudent: async (req, res) => {
        const id = req.params.id
        const { ine, num_etu } = req.body
        Student.updateOne({ _id: id }, { ine, num_etu }).then((student) => {
            res.status(200).json(student);
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err);
        });
    },
    delete: async (req, res) => {
        const id = req.params.id;
        User.updateOne({ _id: id }, { active: false }).then((user) => {
            res.status(200).json(user);
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err);
        });
    },
    activate: async (req, res) => {
        const id = req.params.id;
        User.updateOne({ _id: id }, { active: true }).then((user) => {
            res.status(200).json(user);
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err);
        });
    },
    getAllDesactivated: async (req, res) => {
        const users = await User.find({active: false});
        if (!users) {
            res.status(404).json({ message: 'Users not found' });
        }
        res.status(200).json(users);
    },
    changePassword: async (req, res) => {
        const id = req.params.id;
        const { password } = req.body
        const newPassword = await bcrypt.hashSync(password, bcryptSalt);
        User.updateOne({ _id: id }, { password: newPassword }).then((user) => {
            res.status(200).json(user);
        }).catch((err) => {
            logger.error(`${req.method} ${req.originalUrl} ${err}`)
            res.status(404).json(err);
        });
    }
}

module.exports = usersController;