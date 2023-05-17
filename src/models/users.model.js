const { DataTypes } = require('sequelize');
const db = require('../config/connection');

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING(150),
        field: 'first_name',
    },
    lastName: {
        type: DataTypes.STRING(150),
        field: 'last_name',
    },
    userName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        field: 'user_name'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rolId: {
        type: DataTypes.INTEGER,
        field: 'rol_id',
        defaultValue: 3
    }
}, {
    timestamps: true,
    createdAt: 'register_at',
    updatedAt: 'updated_at'
})

module.exports = Users;