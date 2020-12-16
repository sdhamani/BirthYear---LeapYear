readlineSync =  require('readline-sync');

var moment =  require('moment');

var userName = readlineSync.question("What is your name? ")

console.log("Welcome ", userName);

var userdate = readlineSync.question("Please enter date in YYYY-MM-DD: ")



while (! moment(userdate).isValid()){
  var userdate = readlineSync.question("Please enter date a valid date ")
}

splitDate = userdate.split('-');

year = splitDate[0];

if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
  console.log("Your birth year is a leap Year");
}
else{
  console.log("Your birth year is not a leap Year");
}


 // false

// var d = new Date("11/31/2016");

// console.log(d.toString()); // shows 'Invalid Date'
// console.log(typeof d); // shows 'object'
// console.log(d instanceof Date); // shows 'true'

// function isValidDate(d) {
//   return d instanceof Date && !isNaN(d);
// }


// console.log(isValidDate(d))

// var timestamp = Date.parse('02/31/2020');

// if (isNaN(timestamp) == false) {
//   var d = new Date(timestamp);
//   console.log(d)
// }
// else
// {
//   console.log("in")
// }

// Date.prototype.isValid = function () {
//     // An invalid date object returns NaN for getTime() and NaN is the only
//     // object not strictly equal to itself.
//     return this.getTime() === this.getTime();
// };

// var d = new Date("lol");

// console.log(d.isValid()); // false

// d = new Date("2012/02/31");
// console.log(d)

// console.log(d.isValid()); // tru

