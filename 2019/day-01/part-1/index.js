const path = require('path')

const { getInputArgs } = require('../../utils')

const { calculateFuel } = require('./utils')

const inputArgs = getInputArgs(path.join(__dirname, '../input.txt'))

const result = inputArgs.reduce(
  (acc, currMass) => acc + calculateFuel(currMass),
  0,
)

console.log(result)
