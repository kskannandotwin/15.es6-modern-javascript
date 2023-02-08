// const MAKE;
const MAKE = 'Apple';
console.log(MAKE);

// MAKE = 'Samsung'; //error

{
  const MAKE = 'Apple';
}

{
  const MAKE = 'Samsung';
}

const LANGUAGE = {
  name: 'Javascript',
  version: 'ES'
};

LANGUAGE.version = 'ES6';
// error only if you do LANGUAGE = 'Some value'
