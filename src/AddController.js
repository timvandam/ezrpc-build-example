const { Client } = require('ezrpc')
const { add } = new Client('localhost', 1250).methods

async function handleAdd (req, res, next) {
  const { a, b } = req.params
  add(parseInt(a), parseInt(b))
    .then(result => res.status(200).send(result.toString()))
    .catch(error => res.status(500).send(error.toString()))
}

module.exports = {
  handleAdd
}
