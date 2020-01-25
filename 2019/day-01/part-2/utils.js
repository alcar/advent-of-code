const { calculateFuel } = require('../part-1/utils')

const calculateFuelChain = massOrFuel => {
  const fuel = calculateFuel(massOrFuel)

  if (fuel <= 0) {
    return 0
  }

  return fuel + calculateFuelChain(fuel)
}

module.exports = {
  calculateFuelChain,
}
