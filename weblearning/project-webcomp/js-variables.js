// let & const

{
  // let has Block Scope
  let xyz = 2
  console.log(xyz) 
}
// console.log(xyz)  //  NOT ok

{
  // let has Block Scope
  const zzz = 2
  console.log(zzz) 
}
// console.log(zzz)  //  NOT ok




// vars
// var in function has function scope only
function myVarFunc() {
  var y = 1      // this is Function Scope
  return y
}

// var are NOT block scope
{
  var x = 2      // so this is Global Scope
  console.log(x) 
}

console.log(x)  //  ok
// console.log(y)  //  NOT ok




// diff between var, let & const

var x = 10
var x = 20      // OK   !!!!!!!!
console.log(x)


let z1             // ok
let z = 10
// let z = 20      // NOT ok
console.log(z)
console.log(z1)    // undefined

//const abcX            // NOT ok
const abc = 10
// const abc = 20     // NOT ok
console.log(abc)

