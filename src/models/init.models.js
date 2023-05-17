const Users = require('./users.model');
const Roles = require('./roles.model');
const Posts = require('./post.model');
const Answers = require('./answers.model');
const Categories = require('./categories.model');



const initModel = () => {
    // Un usuario pertenece a un rol
    Users.belongsTo(Roles, { foreignKey: 'rol_id' }); // 1:1

    // Un rol tiene muchos usuarios.
    Roles.hasMany(Users, { foreignKey: 'rol_id' }) // 1:M

    // Una categoria pertenece a muchos posts
    Categories.hasMany(Posts, { foreignKey: 'category_id' }) // 1 : M
}

module.exports = initModel;