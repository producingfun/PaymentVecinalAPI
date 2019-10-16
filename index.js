const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000; 
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("It's alive!");
});

//conexion a BD

require('./database/index')
const Registro = require('./modelos/Registro');

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// endpoit vecinos

app.post('/api/vecinos/', (req, res) => {
    const newVecino = req.body;

    new Articulo(newVecino)
        .save()
        .then( item => { 
            res.status(201).send({
                message: "vecino agregado a la base de datos",
                item,
            });
        })
        .catch( err => {
            res.status(400).send({ // 4.2) Respondo al cliente con respuesta de BD fallida
                message: "there was an errror creating the item",
                err,
            })
        });
});

app.delete('/api/vecinos/:id', (req, res) => {
    Articulo.findByIdAndDelete(req.params.id)
            .then( articulo => {
                res.status(204).send({
                    message: "item deleted succesfully",
                    items: articulo,
                });
            })
            .catch( err => {
                res.send({
                    message: "there was an error with this query",
                    db_error: err,
                });
            });
});