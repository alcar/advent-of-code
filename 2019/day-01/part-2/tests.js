const { calculateFuelChain } = require('./utils')

console.assert(calculateFuelChain(12) === 2, '12')

console.assert(calculateFuelChain(1969) === 966, '1969')

console.assert(calculateFuelChain(100756) === 50346, '100756')
