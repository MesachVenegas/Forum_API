const errorHandler = require('../middlewares/errorHandler.middleware');
const logError = require('../middlewares/logError.middleware');


const errorRoutes = (app) => {
    app.use(errorHandler);
    app.use(logError);

}

module.exports = errorRoutes;