/* ezrpc-main-server */

const express = require('express')

const MathController = require('./controllers/MathController')
const MathControllerValidation = require('./validation/MathControllerValidation')

const app = express()

app.get('/:method/:a/:b',
  MathControllerValidation,
  MathController.calculate)

app.listen(8080, () => console.log('Listening on port 8080'))
