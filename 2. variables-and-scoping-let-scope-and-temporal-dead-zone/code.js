// es6
// let x = 1;

// redeclaration throws an error unlike var
// let x = 3;

// scope
let x = 1;
function add(y) {
  return y + x;
}
console.log(add(3));
// above - so let variables can accessed from inside functions if declared in their outer environment just like var

function add2(y) {
  let x = 2;
  return y + x;
}
console.log(add2(3));

// hoisting
// console.log(z); // commented due to error and explained what is temporal dead zone
// temporal dead zone (call before declared)
let z;
// after declared you can view undefined
console.log(z);
z = 1;
console.log(z);
