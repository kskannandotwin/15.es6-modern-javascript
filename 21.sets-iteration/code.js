// a set is an object storing a collection of unique values
let mySet = new Set();
mySet.add("John");
mySet.add(1);
mySet.add(1);
const phone = {
  make: "Samsung",
  model: "S8",
};
mySet.add(phone);
mySet.add(document.body);
console.log(mySet);

// pass an iterable object to the set constructor
let mySet2 = new Set(["Hi", 1, 1, "John"]);
console.log(mySet2);

let mySet3 = new Set("hello");
console.log(mySet3);

// similar methods to maps
console.log(mySet.has(phone));
console.log(
  mySet.has({
    make: "Samsung",
    model: "S8",
  })
);
console.log(mySet.size);
// mySet.delete(1);
// console.log(mySet.size);
// mySet.clear();
// console.log(mySet.size);

// for of loop
for (const value of mySet) {
  console.log(value);
}

for (const [key, value] of mySet.entries()) {
  console.log(key, value);
}

for (const key of mySet.keys()) {
  console.log(key);
}

for (const value of mySet.values()) {
  console.log(value);
}

// iteration with forEach
mySet.forEach((value) => {
    console.log(value);    
});

// from

// ...
const myArray = [...mySet];
console.log(myArray);
