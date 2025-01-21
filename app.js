const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/', function (req, res) {
    const datos = [
        {nombre: 'Ana', apellidos: 'García'},
        {nombre: 'Juan', apellidos: 'López'}
    ]
    res.render('index', {datos:datos});
})

app.get('/saludo', function (req, res) {
    let hora = new Date();
    res.render('saludo', {hora:hora.getHours()});
})

app.listen(3000)