const path = require('path')

const { getInputArgs } = require('../../utils')

const { prepareAndRunProgram } = require('./utils')

const inputArgs = getInputArgs(path.join(__dirname, '../input.txt'))

const programOutput = prepareAndRunProgram(...inputArgs, 12, 2)

const result = parseInt(programOutput.split(',')[0])

console.log(result)
