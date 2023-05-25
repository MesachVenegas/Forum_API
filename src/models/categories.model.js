const { DataTypes } = require('sequelize');
const db = require('../utils/connection');

const Categories = db.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    category: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
},{
    timestamps: false,
})

module.exports = Categories;