const { createUserValidator, userLoginValidator } = require('../validators/user.validators');
const { Router } = require('express');
const {
    createNerUser,
    getAllUsers,
    userLogin
} = require('../controllers/user.controller');

const routes = Router();

routes.get('/users', getAllUsers);

routes.post('/users',createUserValidator , createNerUser);

routes.post('/users/login', userLoginValidator , userLogin);


module.exports = routes;