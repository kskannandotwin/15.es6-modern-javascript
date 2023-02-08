// for (var i = 0; i < 3; i++) {
//   document.getElementById(i).addEventListener("click", function () {
//     console.log(i);
//   });
// }

// solution in ES5: use a closure
// var f = function (x) {
//   return function () {
//     console.log(x);
//   };
// };

// f(0), f(1)...
// for (var i = 0; i < 3; i++) {
//   document.getElementById(i).addEventListener("click", f(i));
// }

// now try with let
for (let i = 0; i < 3; i++) {
  document.getElementById(i).addEventListener("click", function () {
    console.log(i);
  });
}
