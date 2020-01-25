const { prepareAndRunProgram } = require('../part-1/utils')

const calculateNounAndVerb = (input, targetFirstCode) => {
  let noun = 0
  let verb = 0

  let programOutput
  let firstCode

  while (noun < 100 && verb < 100 && firstCode !== targetFirstCode) {
    programOutput = prepareAndRunProgram(input, noun, verb)

    firstCode = parseInt(programOutput.split(',')[0])

    if (firstCode !== targetFirstCode) {
      if (verb === 99) {
        noun += 1
        verb = 0
      } else {
        verb += 1
      }
    }
  }

  if (firstCode !== targetFirstCode) {
    throw new Error('Impossible output.')
  }

  return { noun, verb }
}

module.exports = {
  calculateNounAndVerb,
}
