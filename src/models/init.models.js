const Categories = require('./categories.model');
const Answers = require('./answers.model');
const Roles = require('./roles.model');
const Users = require('./users.model');
const Posts = require('./post.model');



const initModel = () => {
    // Un usuario pertenece a un rol y un rol puede tener muchos usuarios
    Users.belongsTo(Roles, { foreignKey: 'rol_id' });
    Roles.hasMany(Users, { foreignKey: 'rol_id' })

    // Una respuesta le pertenece a un usuario y un usario pude tener muchas respuestas.
    Answers.belongsTo(Users, { foreignKey: 'user_id'});
    Users.hasMany(Answers, { foreignKey: 'user_id' });

    //  Un post tiene muchas respuestas.
    Posts.hasMany(Answers, { foreignKey: 'post_id' });

    // Un post es creado(le pertenece) a un usuario. y un usario puede crear muchos posts.
    Posts.belongsTo(Users, { foreignKey: 'user_id'});
    Users.hasMany(Posts, { foreignKey: 'user_id'});

    // Una publicación pertenece a una categoria y una categoria tiene muchas publicaciones.
    Posts.belongsTo(Categories, { foreignKey: 'category_id' });
    Categories.hasMany(Categories, { foreignKey: 'category_id' });
}

module.exports = initModel;