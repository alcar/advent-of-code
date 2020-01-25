const { calculateFuel } = require('./utils')

console.assert(calculateFuel(12) === 2, '12')

console.assert(calculateFuel(14) === 2, '14')

console.assert(calculateFuel(1969) === 654, '1969')

console.assert(calculateFuel(100756) === 33583, '100756')
