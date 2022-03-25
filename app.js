const express = require('express')
const app = express()
require('dotenv').config()
console.log(process.env.PORT) // remove this after you've confirmed it working

app.get('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo, soy get')
})
app.post('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo, soy post')
})
app.put('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo, soy put')
})
app.delete('/api/v1/viernes', function (req, res) {
  res.send('Hola mundo, soy delete')
})

// app.listen(3000)

// haremos la linea 17 un call back para empezar a probar

app.listen(process.env.PORT, function(){
    console.log(`servidor encendido en el puerto ${process.env.PORT}`)
})