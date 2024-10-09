// loops





// While loops
//
// while(condition) {
//   statements
// }
// 
// do(condition) {
//   statements
// } while(condition)
//
let total = 0
// while(total < 10) {
//   total++
// }

do {
  total++

  // if (total >= 5) continue
  console.log(total)
  if (total >= 5) break
 

} while(total < 10)

console.log('Total is:', total)
