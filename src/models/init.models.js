const Categories = require('./categories.model');
const Answers = require('./answers.model');
const Roles = require('./roles.model');
const Users = require('./users.model');
const Posts = require('./post.model');



const initModel = () => {
    // Un usuario pertenece a un rol y un rol puede tener muchos usuarios
    Users.belongsTo(Roles, { foreignKey: 'rolId' });
    Roles.hasMany(Users, { foreignKey: 'rolId' })

    // Una respuesta le pertenece a un usuario y un usario pude tener muchas respuestas.
    Answers.belongsTo(Users, { foreignKey: 'userId'});
    Users.hasMany(Answers, { foreignKey: 'userId' });

    //  Una respuesta le pertenece a una publicación y una publicación tiene muchas respuestas.
    Answers.belongsTo(Posts, { foreignKey: 'postId'})
    Posts.hasMany(Answers, { foreignKey: 'postId' });

    // Un post es creado(le pertenece) a un usuario. y un usario puede crear muchos posts.
    Posts.belongsTo(Users, { foreignKey: 'userId'});
    Users.hasMany(Posts, { foreignKey: 'userId'});

    // Una publicación pertenece a una categoria y una categoria tiene muchas publicaciones.
    Posts.belongsTo(Categories, { foreignKey:'categoryId' });
    Categories.hasMany(Posts, { foreignKey: 'categoryId' });
}

module.exports = initModel;