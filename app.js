const logError = require('./src/middlewares/logError.middleware');
const errorHandler = require('./src/middlewares/errorHandler.middleware');
const userRoutes = require('./src/routes/user.routes');
const postRoutes = require('./src/routes/post.routes');
const initModel = require('./src/models/init.models');
const db = require('./src/utils/connection');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
initModel();
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(userRoutes);
app.use(postRoutes);
// En los controladores de las rutas se generan los errores
//  Error handlers
//  Se encarga de capturar todos los errores que vengan de las rutas.
app.use(logError, errorHandler);
// Control de error 404
app.use('*', async (req, res) => {
    res.status(404).json({
        message: "Lo sententimos pero no pudimos encontrar lo que buscas"
    })
})

db.authenticate()
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.error(err))

db.sync()
    .then(() => console.log("Base de datos Sincronizada correctamente"))
    .catch(err => console.error(err));


app.listen(PORT, () => {
    console.log(`Server ON, listen on port ${PORT}`)
});

