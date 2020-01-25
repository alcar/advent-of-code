const fs = require('fs')

const getInputArgs = pathToFile => {
  const rawInput = fs.readFileSync(pathToFile, {
    encoding: 'utf8',
  })

  return rawInput.split('\n')
}

module.exports = {
  getInputArgs,
}
