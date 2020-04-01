class _Math {
  constructor (a, b) {
    if (isNaN(a) || isNaN(b)) throw new Error('Provided arguments must be numbers')
    this.a = a
    this.b = b
  }

  add () {
    return this.a + this.b
  }

  multiply () {
    return this.a * this.b
  }

  subtract () {
    return this.a - this.b
  }

  divide () {
    return this.a / this.b
  }
}

module.exports = _Math
