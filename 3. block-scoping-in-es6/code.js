let y = 2;
{
  let x = 1;
  let z = 2;
  // 2
  console.log(z);
}
{
  // error
  // console.log(x);

  // no redeclaration error, variables are different scopes now
  let z = 4;
  console.log(z);

  // 2
  console.log(y);
}

// ES5 using IIFE (fake scoping)
// (function () {
//   let x = 1;
//   let z = 2;
//   console.log(z);
// });

// (function () {
//   let z = 4;
//   console.log(z);
//   console.log(y);
// });

// let mark = 80;
// if (mark > 50) {
//   let pass = true;
// } else {
//   let pass = false;
// }
// console.log(pass);

// to fix the above scope error
let pass;
let mark = 80;
if (mark > 50) {
  pass = true;
} else {
  pass = false;
}
console.log(pass);
