const CAR = {
  make: "Toyoto",
  model: "Yaris",
};
for (key in CAR) {
  // order not guaranteed
  console.log(key);
}

// undefined
console.log(typeof CAR.forEach);

// example 1
// let myMap = new Map([[1, 2], [3, 4]]);
// console.log(myMap);
// // type
// console.log(typeof myMap); // object
// console.log(myMap.delete(1)); // return true if successful
// console.log(myMap);
// myMap.clear();
// console.log(myMap);

// example 2
const [x, y, z] = [1, NaN, 3];
const LANGUAGE = {
  name: "Javascript",
  version: "ES6",
};
const add = (x, y) => x + y;
const str1 = "build interactive websites";
const str2 =
  "NaN is not equal to itself, but this changes when it comes to Maps";
const arr = [2, 3];

let myMap = new Map();
console.log(myMap);

// set key values
myMap.set(x, z);
console.log(myMap);
myMap.set(LANGUAGE, str1);
console.log(myMap);
myMap.set(add, arr);
console.log(myMap);
myMap.set(y, str2);
console.log(myMap);

// get values/check if they exist
console.log(myMap.get(x));
console.log(myMap.get(1));
console.log(myMap.has(1));

console.log(myMap.get(LANGUAGE));
console.log(myMap.has(LANGUAGE));
// objects are not equal below
console.log(
  myMap.has({
    name: "Javascript",
    version: "ES6",
  })
);

console.log(myMap.get(add));
console.log(myMap.get(NaN));
console.log(myMap.get(y));
console.log(NaN === NaN);
// NaN is not equal to itself, but this changes when it comes to Maps - so return false
console.log(y === NaN);

// iteration with for of
for (const [key, value] of myMap) {
  console.log(`Key: ${key} -> Value: ${value}`);
}
// for (const key of myMap) {
//   console.log(key);
// }

// forEach
myMap.forEach((key, value) => {
    console.log(`Key: ${key} -> Value: ${value}`); 
});

// iterator
// const k = myMap.entries();
const k = myMap.keys();
// const k = myMap.values();
console.log(k);
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());

