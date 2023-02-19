// why do you need create array from other objects?
let arr = [1, 2, 3];
console.log(arr.map(x => x*2));
let str = 'hello';
console.log(arr.map);
console.log(str.map);

// ES5
console.log(Array.prototype.map.call(str, function(x) {
    return x + 'a';
}));
const collection = document.getElementsByClassName('blue');
console.log(collection);
console.log(collection.slice);
// ES5
console.log(Array.prototype.slice.call(collection, 1, 3));


// create an array from a collection
console.log(Array.from(collection));

// create an array from a string
console.log(Array.from(str));

// create an array from function statements
function g (x, y) {
    console.log(arguments);
    console.log(Array.from(arguments));        
}
g(1, 2);
