const validator = require('validator');
console.log(validator.isEmail('example.com'));
console.log(validator.isEmail('arihant@gmail.com'));
console.log(validator.isURL('https://mead.io'));
console.log(validator.isURL('google.c'));