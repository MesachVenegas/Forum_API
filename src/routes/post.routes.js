const reqAuth = require('../middlewares/auth.middleware');
const { Router } = require('express');
const {
    createNewPost
} = require('../controllers/post.controller');

const routes =  Router();

//  TODO protege this route
routes.post('/post', reqAuth, createNewPost)


module.exports = routes;