const errorRoutes = require('./src/routes/error.routes');
const apiRoutes = require('./src/routes')
const initModel = require('./src/models/init.models');
const db = require('./src/utils/connection');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

errorRoutes(app);
apiRoutes(app);

db.authenticate()
.then(() => console.log("Conectado a la base de datos"))
.catch(err => console.error(err))

initModel();

db.sync()
    .then(() => console.log("Base de datos Sincronizada correctamente"))
    .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server ON, listen on port ${PORT}`)
});

