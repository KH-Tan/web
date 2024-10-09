

let movieNames = movies.join(', ');
console.log(movieNames);

let p1 = document.getElementById('para1');
let p2 = document.getElementById('para2');

console.log(p1);
console.log(p1.textContent);

p2.textContent = movieNames;


// Node Types
// 1 Element
// 3 Text
// 8 Comment
// 9 Document
// 10 Document Type
// 11 Document Fragment

// 2 Attribute   (Deprecated)
// 4 CData       (Deprecated)

var mainElement = document.getElementById('main');
console.log(mainElement.nodeType);

// parent.children
// parent.firstElementChild
// parent.lastElementChild
// node.nextElementSibling
// node.previousElementSibling
// node.parentNode
// parent.contains(node)

let mainClass = document.querySelector('.main');
let c1 = mainClass.children;
let c2 = mainClass.childNodes;
console.log(c1);
console.log(c2)

let div = document.getElementById('movie-info');
// let h2 = div.firstElementChild;

let h2 = div.children[0];
console.log(h2.textContent);

let ul = div.children[1];

let li1 = ul.firstElementChild;
let li2 = li1.nextElementSibling;
let li3 = li2.nextElementSibling;
console.log(li1.textContent);
console.log(li2.textContent);
console.log(li3.textContent);

console.log('----- output of v1 -----')

let lis = ul.children;
let liA = lis[0];
let liB = lis[1];
let liC = lis[2];
console.log(liA.textContent);
console.log(liB.textContent);
console.log(liC.textContent);


// lis.forEach(displayLi);       not working ???????????
// function displayLi(li) {
//   console.log(li);
// }

let numbers = [1,2,3,4,5];
// numbers.forEach(displayNumbers);
// function displayNumbers(n) {
//   console.log(n);
// }
numbers.forEach((n) => {
  console.log(n);
});


liA.textContent = liA.textContent.toUpperCase();
liB.textContent = liB.textContent.toUpperCase();
liC.textContent = liC.textContent.toUpperCase();

console.log('----- output of v2 -----')

console.log(liA.firstChild.nodeValue);
console.log(liB.firstChild.nodeValue);
console.log(liC.firstChild.nodeValue);

console.log('----- output of v3 -----')
