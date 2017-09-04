#!/usr/bin/env nodejs
const express = require('express')
const app = express()

app.use(express.static('dist'))

app.listen(8080, function () {
  console.log('Listening on port 8080!')
})