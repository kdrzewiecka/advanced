const express = require('express')
const app = express()
const path = require('path')

// KONFIGURACJA STATYCZNEGO FOLDERU
app.use( express.static( path.join(__dirname, '/src/static')))

// app.get('*', function (req, res) {
//   console.log(req.originalUrl)
// })

app.listen(80)