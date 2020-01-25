const path = require('path')

const { getInputArgs } = require('../../utils')

const { calculateFuelChain } = require('./utils')

const inputArgs = getInputArgs(path.join(__dirname, '../input.txt'))

const result = inputArgs.reduce(
  (acc, currMass) => acc + calculateFuelChain(currMass),
  0,
)

console.log(result)
