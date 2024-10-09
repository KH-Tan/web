// Function declaration

function function1 (arg1, arg2) {
  console.log('Arg1 is:', arg1)
  console.log('Arg2 is:', arg2)
}
function1('Hello', 'World')


// Function expression
// just as assigning number to variable
// a function can be assigned to variable,array,object property
let num = 28;
let function2 = function(arg1) {    // anonymous function
  if (arg1 == undefined) {
    console.log('Hello World!!!')
  } else {
    console.log('Hello World!!!', arg1)
  }
}
function2()
function2('Swifty')

let functionsInArray = [
  28,
  'Some String',
  function() {console.log('Function in Array2')},
  function() {console.log('Function in Array3')},
]
console.log( functionsInArray[0] )
console.log( functionsInArray[1] )
console.log( functionsInArray[2] )
console.log( functionsInArray[3] )
functionsInArray[2]()
functionsInArray[3]()

let functionsInObj = {
  num: 20,
  str: 'Hello World',
  function3: function() {console.log('Function in Obj')}
}
console.log(functionsInObj.num, functionsInObj.str )
functionsInObj.function3()

console.log(10 + ( function() {return 10} )() ) // anonymous
console.log(20 + ( () => {return 20} )() )      // arrow function

let functionInFunction = function(num, fn) {
  console.log( num + fn() )
}
functionInFunction(33, () => { return 22 } )


let returnNumber = () => {return 88}
console.log( returnNumber() )

let returnFunction = () => {  
  return ()=>{ console.log('Returned Function') }     
}

let newFunc = returnFunction();
newFunc()


// Pure functions
// --------------
// same input will return same output
// no side effects

let someString = 'Some String'

function oldFunction (input) {
  let output = input.toUpperCase()
  return output
}

let functionPure = function(inputString) {
  let outputString = inputString.toUpperCase()
  return outputString
}

let x = oldFunction(someString)
let resultString = functionPure(someString)

console.log('oldFunction:', x)
console.log('someString:', someString)
console.log('resultString:', resultString)


// Higher-Order Functions
// ----------------------
// may accept functions as paramenters
// will return a function
//
// eg CallBack functions


let y = function() {
  console.log('y')
}
let higherOrderFunction = function(f) {
  let _output = f()
  return _output
}

higherOrderFunction(y)





console.log('----------------------------')

// .sort()
// .toSorted()  eg of Higher Order Functions ???????????????
//          Callback    ?????????????????????

// Compare function
//
// -    a-b (1-3)   no swap
// 0    a-b (2-2)   no swap
// +    a-b (3-1)   swap

console.log('----- Numeric Sorting start -----')

let notSortedN = [9, 3, 12, 11.95, 40, 28, 5]
console.log(notSortedN)
let sortedN = notSortedN.toSorted()
console.log('Numbers sorted by Unicode character:', sortedN)
// Result is not numeric sorting 

// long version of custom function for sorting
// based on numeric value
const compareFuncN = (a, b) => {
  if ( a < b ) {
    return -1
  } else if ( a == b ) {
    return 0
  } else {
    return 1
  }
}
const compareNAs = (a,b)=>a-b  // abbrev for Ascending 
const compareNDs = (a,b)=>b-a  // abbrev for Descending 
console.log('Numbers Ascending:', notSortedN.toSorted(compareNAs))
console.log('Numbers Descending:', notSortedN.toSorted(compareNDs))

console.log('----- Numeric Sorting end -----')


//
console.log('----- Books Sorting start -----')

const books = [
  { title: 'Book A', year: 2010 },
  { title: 'Book B', year: 2005 },
  { title: 'Book C', year: 2018 },
]
console.log(books)

let booksSorted = books.toSorted()
console.log('Books sorted by ?????:', booksSorted)
// Result is ????? 

const booksCompareAs = (a,b)=>a.year-b.year  // Ascending 
const booksCompareDs = (a,b)=>b.year-a.year  // Descending 
console.log('Year Ascending:', books.toSorted(booksCompareAs))
console.log('Year Descending:', books.toSorted(booksCompareDs))

console.log('----- Books Sorting end -----')




//
console.log('----- String Sorting start -----')

let thingsZ = ['b', '3', 'c', '1', 'a', '2']
let things= ['Building','GS1' ,'car', 'bicycle','gs1' ,'automobile', 'Tree']
let thingsX = ['Building', 'Car', 'Bicycle', 'Automobile', 'Tree']
let sortedThings = things.toSorted()    // w/o Custom Compare Function
console.log(things)
console.log(sortedThings)   // based on UNICODE values A-Za-z

// long version of custom function for sorting
// Not case sensitive
const compareStringNotCS = (a, b) => {
  let x = a.toLowerCase(), y = b.toLowerCase()
  if (x < y) { return -1 }
  if (y < x) { return  1 }
  return 0
}
// abbrev - Using localeCompare
// ---------------------------------------
// gs1 before GS1
const stringCase0 = (a,b)=>a.localeCompare(b)
const stringCaseX = (a,b)=>a.localeCompare(b,'en',{sensitivity:'case'})
// GS1 before gs1 only if GS1 is physically before 
const stringCase1b = (a,b)=>a.toLowerCase().localeCompare(b.toLowerCase())
const stringCase1 = (a,b)=>a.localeCompare(b,undefined,{sensitivity:'base'})

sortedThings = things.toSorted( stringCase1b )
console.log('Not Case Sensitive', sortedThings)  // result is not case-sensitive now

const stringCaseR = (a,b)=>b.localeCompare(a,undefined,{sensitivity:'base'})
let sortedThingsR = things.toSorted( stringCaseR )
console.log('Reverse of above', sortedThingsR)
console.log('Reverse of above', sortedThings.toReversed())


console.log('----- String Sorting end -----')




//
console.log('----- Customized String Sorting start -----')

let names = ['Mike Smith', 'Dr. Johnson', 'John Doe', 'John DOE', 'DR. Williams', 'Alan Jones']
let sortedNames = names.toSorted()    // w/o Custom Compare Function
console.log(names)
console.log(sortedNames)   // based on UNICODE values A-Za-z

// custom function for sorting
// Not case sensitive & Dr. appear first
const namesSortCustom = (a, b) => {
  let x = a.toLowerCase(), y = b.toLowerCase()
  if ( x.startsWith('dr.') && !y.startsWith('dr.') ) { return -1 }
  if ( !x.startsWith('dr.') && y.startsWith('dr.') ) { return  1 }
  return x.localeCompare(y)
}
sortedNames = names.toSorted( namesSortCustom )
console.log('Not Case Sensitive', sortedNames)
console.log('Reverse of above', sortedNames.toReversed())


console.log('----- Customized String Sorting end -----')
