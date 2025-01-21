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

app.get('/productos', function (req, res) {
    const productos = [
        {id: '1', nombre: 'Mesa', precio: 20, color:['Rojo', 'Negro', 'Verde']},
        {id: '2', nombre: 'Silla', precio: 10, color:['Rojo', 'Negro', 'Verde']},
        {id: '3', nombre: 'Armario', precio: 100, color:['Rojo', 'Negro', 'Verde']},
        {id: '4', nombre: 'Sofá', precio: 200, color:['Rojo', 'Negro', 'Verde']}
    ]
    res.render('productos', {productos:productos});
})

app.listen(3000)