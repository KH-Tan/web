// JS Playground

let ingredients = ['lettuce', 'cheddar', 'ham']

ingredients.push('onion')
ingredients.push('pepper')
console.log(ingredients)
ingredients.pop()
console.log(ingredients)
ingredients.unshift('chilli')
console.log(ingredients)
ingredients.shift()
console.log(ingredients)

ingredients.splice(0, 1,'red lettuce')
console.log(ingredients)
ingredients.splice(1, 1,'new cheese')
console.log(ingredients)
ingredients.splice(2, 1,'bacon','peperoni')
console.log(ingredients)

ingredients.reverse()
console.log(ingredients)
ingredients.sort()
console.log(ingredients)

var position = ingredients.indexOf('ham')
console.log(position)
var position = ingredients.indexOf('bacon')
console.log(position)

let names = ['Jeff', 'Bunny', 'Walter']
let nNames = names.length
for ( i=0; i<nNames ; i++  ) {
  console.log( names[i] )
}
for ( n in names  ) {
  console.log( 'Index', n, names[n] )
}
for ( n of names  ) {
  console.log('of', n )
}
names.forEach( n => {
  console.log('forEach', n )
})

let sandwichHas = function(item) {
  for ( i of ingredients ) {           // of   ??????????
    if ( i == item ) {
      return true
    }
  }
  return false
}

if ( sandwichHas('cheddar') ) {
  console.log('Sandwich has chedder')
} else if ( sandwichHas('ham') ) {
  console.log('Sandwich has ham')
} else if ( sandwichHas('lettuce') ) {
  console.log('Sandwich has lettuce')
} else {
  console.log('No Nothing')
}


isTrue = true
isFalse = false
if (isTrue == isFalse) {
  console.log('Impossible')
} else {
  console.log('Possible')
}
// ternary
// () ? a:b
isTrue == isFalse ? console.log('Impossible') : console.log('Possible')





// Objects
var dog = {'name':'Akisan', 'type':'Akita'}
var cat = {'name':'Purr', 'type':'Persian'}
console.log(dog)
console.log(cat)

var petNames = ['Akisan','Purr']
console.log(petNames)
var pets = [dog, cat]
console.log(pets)

cat.age = 2
dog['age'] = 10
console.log(pets)


let monsters = { 'Canada':'Sasquatch',
  'Nepal':'Yeti',
  'Scotland':'Loch Ness' }
console.log(monsters)

for ( p in monsters ) {
  // console.log(p)
  // console.log(monsters[p])
  console.log(p, ':', monsters[p])
}
