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
greet();
function greet() {
  console.log("hi");
}

// hi
greet();
{
  function greet() {
    console.log("hello");
  }

  // hello
  greet();
  {
    function greet() {
      console.log('Hi there');      
    }
  }
}

// hello
greet();

{
  function greet() {
    console.log('hi hello');
    
  }
}

// hi hello
greet();

