const userRoutes = require('./src/routes/user.routes');
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

db.authenticate()
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.error(err))

db.sync()
    .then(() => console.log("Base de datos Sincronizada correctamente"))
    .catch(err => console.error(err));

app.get('/', (req, res) =>{
    console.log("Servidor en linea");
    res.send("Servidor en linea");
})

app.listen(PORT, () => {
    console.log(`Server ON, listen on port ${PORT}`)
});

