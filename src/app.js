const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const morgan = require('morgan');

const app = express();

const Routes = require('./routes/index');

mongoose.connect('mongodb://landing:landing123@ds151416.mlab.com:51416/landing_lucio')
    .then(() => {
        console.log('Base de datos conectada');
    }, err => {
        console.log(err)
    })

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use('/', Routes);

app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
})