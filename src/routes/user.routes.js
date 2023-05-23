const { Router } = require('express');
const {
    createNerUser,
    getAllUsers,
    userLogin
} = require('../controllers/user.controller');

const routes = Router();

routes.get('/users', getAllUsers);

routes.post('/users', createNerUser);

routes.post('/users/login', userLogin);


module.exports = routes;