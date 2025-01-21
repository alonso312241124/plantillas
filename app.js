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

app.listen(3000)