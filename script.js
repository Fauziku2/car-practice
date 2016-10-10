var randomCar = require('./car')

var honda = new randomCar('blue')

console.log('honda is travelling at ' + honda.speed + 'km/h')

honda.acc(50)

console.log('honda is now travelling at ' + honda.speed + 'km/h')


console.log('honda is ' + honda.color + ' in color')

honda.setColor('green')

console.log('honda is now ' + honda.color + ' in color')

// console.log('honda is a travelling at ' + honda.stop() + 'km/h')

// console.log('Is honda a convertible? ' + honda.convertible(200, 5))
