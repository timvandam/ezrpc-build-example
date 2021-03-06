module.exports = (req, res, next) => {
  const { a, b } = req.params
  if (!a || !b || isNaN(a) || isNaN(b)) return res.status(400).send('Invalid parameters')
  req.params.a = parseInt(a)
  req.params.b = parseInt(b)
  next()
}
