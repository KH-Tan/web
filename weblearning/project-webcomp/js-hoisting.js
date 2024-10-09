// Hoisting
//
console.log('----- Hoisting Start -----')




printHello()      // this is OK
// printHelloWorld() // this is NOT

// functions
function printHello() {   // hoisted to top of Global Scope
  printHelloWorld()   // this is OK

  console.log('Hello')

  function printHelloWorld() {  // hoisted to top of Local Scope
    console.log('Hello World')
  }
}





console.log(nameFirst)
// console.log(nameLast)
// console.log(nameCode)

// vars
var nameFirst = 'James'   // hoisted with value of undefined
let nameLast = 'Bond'     // hoisted with no value (error generated)
const nameCode = '007'    // hoisted with no value (error generated)

// Concept of Temporal Dead Zone

// hoisted with no value (error generated)
const Dog = new Animal('Blacky')
console.log(Dog.name)

// classes
class Animal {
  constructor(name) {
    this.name = name
  }
}





console.log('----- Hoisting End -----')
