// create a separate scope first using a block
// {
//   // hi
//   greet();
//   function greet () {
//     console.log('hi');
//   }

//   // hi
//   greet();
//   {
//     function greet() {
//       console.log('hello');
//     }

//     // hello
//     greet();
//   }

//   // hi
//   greet();
// }

// hi
// greet();
let greet = function greet() {
  console.log("hi");
};

// hi
greet();

{
  let greet = function () {
    console.log("hello");
  };

  // hello
  greet();
  {
    let greet = function () {
      console.log("Hi there");
    };
  }
}

// hi
greet();

{
  let greet = function () {
    console.log("hi hello");
  };
}

// hi
greet();
