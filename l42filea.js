// => Circular Dependency

// console.log("i am file a");
// require('./l42fileb.js');

console.log("i am file a"); 
module.exports = "Hello Sir, i am from file a";
require("./l42fileb");


// =>error 
console.log("i am file a"); 
require("./l42fileb");
module.exports = "Hello Sir, i am from file a";