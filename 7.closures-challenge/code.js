// ES6 (easiest)

// create an empty array
let cars = [];

// using a for loop insert three functions logging their corresponding index inside the array

for (let i = 0; i < 3; i++) {
  cars[i] = function () {
    console.log(i);
  };
}

cars[0]();
cars[1]();
cars[2]();

// ES5
var bikes = [];
function f(x) {
  return function () {
    console.log(x);
  };
}

for (var i = 0; i < 3; i++) {
  bikes[i] = f(i);
}

bikes[0]();
bikes[1]();
bikes[2]();
