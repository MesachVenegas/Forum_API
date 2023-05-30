const postRoutes = require('./post.routes');
const userRoutes = require('./user.routes');

const apiRoutes = (app) => {
    app.use(postRoutes);
    app.use(userRoutes);

    app.use('*', async (req, res) => {
        res.status(404).json({
            message: "Lo sententimos pero no pudimos encontrar lo que buscas"
        })
    })
}

module.exports = apiRoutes;