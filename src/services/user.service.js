const Roles = require('../models/roles.model');
const User = require('../models/users.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


class UserService {
    static async getUsers() {
        try {
            const result = await User.findAll({
                attributes: {
                    exclude: [
                        'password',
                        'register_at',
                        'updated_at',
                        'rolId'
                    ]
                },
                include: {
                    model: Roles
                }
            });
            return result;
        } catch (error) {
            throw error
        }
    }

    static async create(data) {
        try {
            const result = await User.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async finduser(reqEmail, next) {
        try {
            const user = await User.findOne({ where: { email: reqEmail}});
            if(!user){
                return next({
                    status: 404,
                    name: "Not found",
                    errorMessage: "The user does not exist or is incorrect"
                });
            }
            return user;
        } catch (error) {
            return error
        }
    }

    static async login(reqEmail, reqPassword, next) {
        try {
            // * Validamos que el usuario solicitado exista.
            const user = await User.findOne({ where: { email: reqEmail } });
            // * Si el usario no existe en la base de datos se envía un mensaje de error.
            if (!user) {
                return next({
                    status: 404,
                    name: 'User not found',
                    errorMessage: 'The email does not exist'
                });
            }
            // ? Validamos la contraseña;
            const validPassword = await bcrypt.compare(reqPassword, user.password);
            // * Si la contraseña no conincide con la del usuario se envía un mensaje de error.
            if (!validPassword) {
                return next({
                    status: 400,
                    name: "Invalid password",
                    errorMessage: 'The password does not match'
                });
            }
            const { id, firstName, lastName, username, email, rolId, register_at, updated_at } = user;
            const userData = { id, firstName, lastName, username, email, rolId, register_at, updated_at };
            // * firma de usuario
            const token = await jwt.sign(userData, "thisIsKeyWord", {
                algorithm: 'HS512',
                expiresIn: '1h'
            })

            userData.token = token;
            return userData;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;