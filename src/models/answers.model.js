const { DataTypes } = require('sequelize');
const db = require('../utils/connection');

const Answers = db.define('answers',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'post_id',
    },
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

module.exports = Answers;