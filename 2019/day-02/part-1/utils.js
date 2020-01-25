const runProgram = (opcodes, offset) => {
  const position = typeof offset !== 'undefined' ? offset : 0

  const opcode = opcodes[position]

  if (opcode === 99) {
    return opcodes.join(',')
  }

  if (opcode !== 1 && opcode !== 2) {
    throw new Error('Unknown opcode.')
  }

  const firstArgPosition = opcodes[position + 1]
  const secondArgPosition = opcodes[position + 2]

  const firstArg = opcodes[firstArgPosition]
  const secondArg = opcodes[secondArgPosition]

  const result = opcode === 1 ? firstArg + secondArg : firstArg * secondArg

  const targetPosition = opcodes[position + 3]

  opcodes[targetPosition] = result

  return runProgram(opcodes, position + 4)
}

const prepareAndRunProgram = (program, noun, verb) => {
  const opcodes = program.split(',').map(string => parseInt(string))

  if (typeof noun !== 'undefined') {
    opcodes[1] = noun
  }

  if (typeof verb !== 'undefined') {
    opcodes[2] = verb
  }

  return runProgram(opcodes)
}

module.exports = {
  prepareAndRunProgram,
}
