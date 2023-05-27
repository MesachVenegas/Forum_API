const UserService = require('../services/user.service');
const bcrypt = require('bcrypt');

const createNerUser = async (req, res, next) => {
    try {
        const { username, email, password, rolId } = req.body;
        // * Hashed de contraseña con Bcrypt.
        const hashed = await bcrypt.hash(password, 10);
        // * Si todo sale bien creamos el usario.
        await UserService.create({ username, email, password: hashed, rolId })
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }

}

const getAllUsers = async (req, res, next) => {
    try {
        const response = await UserService.getUsers();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error);
    }
}

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.finduser(email, next)
        console.log(user)
        // const response = await UserService.login(email, password, next);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createNerUser,
    getAllUsers,
    userLogin
}