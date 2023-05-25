const { DataTypes } = require('sequelize');
const db = require('../utils/connection');


const Roles = db.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rol: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
},{
    timestamps: false
});

module.exports = Roles;