// 12/02/22
// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)!

function reverse(str) {
  return str.split('').reduce((prev, curr) => curr + prev);
}

console.log(reverse(`Hello World`));
