var randomCar = require('./car')

var honda = new randomCar(10, 'blue')

console.log('honda is a travelling at ' + honda.acc(5) + 'km/h')
// console.log('honda is a travelling at ' + honda.dec(5) + 'km/h')

console.log('honda is ' + honda.color + ' in color')

honda.setColor('green')

console.log('honda is ' + honda.color + ' in color')

// console.log('honda is a travelling at ' + honda.stop() + 'km/h')

console.log('Is honda a convertible? ' + honda.convertible(200, 5))
