const userRoutes = require('./src/routes/user.routes');
const postRoutes = require('./src/routes/post.routes');
const initModel = require('./src/models/init.models');
const db = require('./src/config/connection');
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

db.authenticate()
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.error(err))

db.sync()
    .then(() => console.log("Base de datos Sincronizada correctamente"))
    .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server ON, listen on port ${PORT}`)
});

