/* ezrpc-main-server */

const express = require('express')
const app = express()
const AddController = require('./AddController')

app.get('/add/:a/:b', (req, res, next) => {
  const { a, b } = req.params
  if (!a || !b || isNaN(a) || isNaN(b)) return res.status(400).send('Invalid parameters')
  next()
}, AddController.handleAdd)

app.listen(8080, () => console.log('Listening on port 8080'))
