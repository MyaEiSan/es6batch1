console.log(require('./l43fileb.js'));
console.log(require('./l43fileb.js'));
console.log(require('./l43fileb.js'));
console.log(require('./l43fileb.js'));
console.log(require('./l43fileb.js'));

// console.log(module);
// console.log(require);
// console.log(require.main === module);

// console.log(require.resolve); // [Function: resolve] { paths: [Function: paths] }
// console.log(require.resolve("./l43fileb")); //D:\Personal\es6batch1\l43fileb.js
// console.log(require.cache[require.resolve("./l43fileb")].exports); //1722875108868

// require.cache[require.resolve("./l43fileb")].exports = "Here is a new value";
// console.log(require('./l43fileb'));

delete require.cache[require.resolve("./l43fileb")];
console.log(require('./l43fileb.js'));//i am file b 1722875399529


// 5RE 