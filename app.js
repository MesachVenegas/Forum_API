const initModel = require('./src/models/init.models');
const db = require('./src/config/connection');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Posts = require('./src/models/post.model');
const Users = require('./src/models/users.model');
const Categories = require('./src/models/categories.model');
const Answers = require('./src/models/answers.model');
const { where } = require('sequelize');
require('dotenv').config();

const PORT = process.env.PORT || 8000;
initModel();
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

db.authenticate()
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.error(err))

db.sync({ alter: true })
    .then(() => console.log("Base de datos Sincronizada correctamente"))
    .catch(err => console.error(err));

app.get('/', (req, res) =>{
    console.log("Servidor en linea");
    res.send("Servidor en linea");
})

// Obtener un Post con su categoria y el usuario que la creo.
app.get('/posts/:id', async (req, res) =>{
    try {
        //  Si se uniran 2 tablas o mas se require incluir en el include un array de modelos a incluir
        const { id } = req.params;
        const post = await Posts.findByPk(id, {
            attributes: {
                exclude: ['user_id', 'userId', 'categoryId', 'category_id'],
            },
            include: [
                {
                    model: Users,
                    attributes: ['id', 'user_name']
                },
                {
                    model: Categories,
                    attributes: ['id', 'category' ]
                },
                {
                    model: Answers,
                    include: [
                        {
                            model: Users,
                            attributes: ['id', 'user_name']
                        }
                    ]
                }
            ]
        })
        res.json(post)
    } catch (error) {
        console.error(error);
        res.send(error.message);
    }
})

app.listen(PORT, () => {
    console.log(`Server ON, listen on port ${PORT}`)
});

