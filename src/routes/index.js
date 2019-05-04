const express = require('express');
const routes = express.Router();

const landing = require('../model/landing');

routes.get('/', (req, res) => {
    res.render('index');
});

routes.post('/enviar', (req, res) => {
    const Landing = new landing(req.body);
    Landing.save()
        .then((Landing) => {
            res.send('<h1>hola</h1>');
        }, err => {
            console.log(err)
        })
})

module.exports = routes;