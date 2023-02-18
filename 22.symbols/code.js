// why do you need symbols
const OFFSTATE = Symbol("off");
const ONSTATE = Symbol("on");
const feature1 = Symbol("feature");
const feature2 = Symbol("feature");
let car = {
  make: "Audi",
  [feature1]: "cruise control",
  [feature2]: "air conditioning",
  state: ONSTATE,
  speed: 20,
  turnon() {
    this.state = ONSTATE;
  },
  turnoff() {
    this.state = OFFSTATE;
  },
  accelerate() {
    if (this.state === ONSTATE) {
      this.speed += 10;
    }
  },
};

console.log(car); // only one feature is listed
// this can be solved by making this object keys unique
car.accelerate();
console.log(car);

// symbols are new in ES6. They are primitive type.
const mySymbol = Symbol("Symbol description");
console.log(mySymbol);
console.log(mySymbol.toString());
// console.log(mySymbol + 'hello');

const symbol1 = Symbol("a");
const symbol2 = Symbol("b");
console.log(symbol1 === symbol2);
console.log(typeof symbol1); // symbol

console.log(Object.keys(car));
console.log(Object.getOwnPropertyNames(car));
for (const key in car) {
  console.log(key);  
}

// OwnProprtySymbols
console.log(Object.getOwnPropertySymbols(car));
