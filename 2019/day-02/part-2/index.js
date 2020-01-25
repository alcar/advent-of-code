const path = require('path')

const { getInputArgs } = require('../../utils')

const { calculateNounAndVerb } = require('./utils')

const inputArgs = getInputArgs(path.join(__dirname, '../input.txt'))

const { noun, verb } = calculateNounAndVerb(...inputArgs, 19690720)

const result = 100 * noun + verb

console.log(result)
