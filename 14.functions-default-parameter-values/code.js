// ES5
function increment(x, y) {
  return y == undefined ? x + 1 : x + y;
}
console.log(increment(5));
console.log(increment(5, 3));

// ES6
const increment2 = (x, y = 1) => x + y;
console.log(increment2(5));
console.log(increment2(5, 3));

// using destructuring
function greet([firstname, lastname = ""]) {
  console.log(`hello ${firstname} ${lastname}`);
}
greet(["Bill"]);

// function addup({item: item = 'Bananas', price: price = 0, quantity: quantity = 0} = {}) { // simples
function addup({ item = "Bananas", price = 0, quantity = 0 } = {}) {
  console.log(`please pay $${price * quantity} for ${quantity} ${item}`);
}
addup({ item: "Bananas", price: 1, quantity: 5 });
addup({});
addup();
