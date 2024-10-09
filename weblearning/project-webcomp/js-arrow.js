// Arrow Functions (ES6)
// 0. different syntax
// 1. no arguments object
// 2. do not create their own this binding
// 3. cannot be used as constructors
// 4. cannot be declared
// 5. cannnot be used before initialization

// 1
// normal function syntax


function myHello() {
  console.log('Hello World')
}

function myConsole(output) {
  console.log(output)
}

function myAdd(n1, n2) {
  const nTotal = n1 + n2
  return nTotal
}

myHello()
myConsole('Sayonara')
console.log('myAdd:', myAdd(1, 2) )


// 1
// arrow functiopn syntax
//   function() => { return X }
//   () => { return X }
//   () =>        // if 1 statement
//      =>        // if only 1 arg

var myHello2 = () => { return console.log('arrow:','Hello World') }
myHello2()
myHello2 = () => { console.log('arrow:','Hello World') }
myHello2()
myHello2 = () => console.log('arrow:','Hello World')
myHello2()

var myConsole2 = output => console.log(output)
myConsole2('Sayonara')

var myAdd2 = (n1, n2) => n1 + n2
console.log('arrow:', myAdd2(3, 4) )




// 2

// function printSome() {
//   console.log(some)
// } 
// printSome(1,"a",["a","b"])


const myObj = {
  name: 'James',
  code: '007',
  kills: 999,
  myFunc: function() { console.log('This is?', this)  }
}
myObj.myFunc()

// f2() is not invoke by object ref this points to Window object 
const myObj2 = {
  name: 'Jane',
  code: '008',
  kills: 1,
  myFunc: function() {
    function f2() {
      console.log('This is?', this)
    }
    f2()
  } 
}
myObj2.myFunc()

// arrow functions do not create their own this binding
// this points to Window object
const myObjArrow = {
  name: 'James',
  code: '007',
  kills: 999,
  myFunc: () => { console.log('This is?', this)  }
}
myObjArrow.myFunc()


// f2() is not invoke by object ref this points to Window object 
const myObj2Arrow = {
  name: 'Jane',
  code: '008',
  kills: 1,
  myFunc: function() {
    const f2 = () => {
      console.log('This is?', this)
    }
    f2()
  } 
}
myObj2Arrow.myFunc()








// 3. cannot be used as constructors
//
class Animal {
  constructor(name, numLegs) {
    this.name = name
    this.numLegs = numLegs
  }

  sayName() {
    console.log(`My name is ${this.name}`)
    console.log('    I have', this.numLegs, 'legs')
  }
}

const Dog = new Animal('Bingo', 4)
const Bird = new Animal('Mongo', 2)
Dog.sayName()
Bird.sayName()




//
class Animal2 {
  // --- invalid syntax ---
  // constructor = (name, numLegs) =>  {
  //   this.name = name
  //   this.numLegs = numLegs
  // }
  constructor (name, numLegs) {
    this.name = name
    this.numLegs = numLegs
  }

  // --- ok here ---
  sayName = () => {
    console.log(`My name is ${this.name}`)
    console.log('    I have', this.numLegs, 'legs')
  }
}

const Dog2 = new Animal2('Bingo', 4)
const Bird2 = new Animal2('Mongo', 2)
Dog2.sayName()
Bird2.sayName()


// 4. cannot be declared
// arrow functions are function expressions
// assigned to a variable
function printHello() {
  console.log('Hello')
}
printHello()

const printHello2 = () => { console.log('Hello2') }
printHello2()




// 5. cannnot be used before initialization

printSpecial()     // this is OK (hoisted)
printSpecial2()    // this is NOT

function printSpecial() {
  console.log('Special')
}
const printSpecial2 = () => {
  console.log('Special2')
}
