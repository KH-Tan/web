// Javascript is Prototype based
//           not Class based
//
// every object created has a Prototype object
//
// javascript objects are containers for Properties & Methods

// 3 ways to define
// 1) use Object Literal
// 2) use new Keyword
// 3) use Object Constructor



const myObj1 = {
  nameAgent: 'James',
  codeAgent: '007',
  killsAgent: 999,
  bannerAgent: function(){ return this.nameAgent+' '+this.codeAgent },
  myFunc: function(){ console.log('In:', this.bannerAgent() ) },
  myF: function(){ console.log('In2:', this.nameAgent+' '+this.codeAgent ) }
}

console.log(myObj1.bannerAgent())
myObj1.myFunc()
myObj1.myF()

//
const myObj2 = {
  nameAgent: 'Jane',
  codeAgent: '008',
  killsAgent: 1,
}
// myObj2.myFunc()





// 2) use new Keyword
const person = new Object()
// add properties
person.fname = 'John'
person.lastname = 'Doe'

person.age = 50
delete person.age



console.log(person)
console.log(person.fname)
console.log(person['lastname'])
let ln = 'lastname'
console.log(person[ln])




// 3) use Object Constructor
// via a function
// good practice to use Upper-case 1st letter  
function Agent(firstName, lastName, code, kills) {
  this.firstName = firstName
  this.lastName = lastName
  this.code = code
  this.kills = kills
}

const agent1 = new Agent('James','Bond','007',999)
const agent2 = new Agent('Jane','Bong','008',1)

console.log(agent1.firstName, agent1.lastName, agent1.code)

