//es5: we declared variables using var
//global scoped
var x = 1;

//variables were global scoped or function scoped
function add1(y){
    //function scoped
    var x = 2;
    return y + x;
}
//5
console.log(add1(3));

function add2(y){
    return y + x;
}
console.log(add2(3));

// they were also hoisted
//undefined, no error thanks to hoisting
console.log(z);
var z = 1;
console.log(z);