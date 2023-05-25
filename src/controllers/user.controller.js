const UserService = require('../services/user.service');
const bcrypt = require('bcrypt');

const createNerUser = async (req, res) => {
    try {
        // ! validar que los campos obligatorios estén presentes.
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

const getAllUsers = async (req, res) => {
    try {
        const response = await UserService.getUsers();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error);
    }
}


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const response = await UserService.login(email, password);
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