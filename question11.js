// 11/2/22
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x) {
  if (x.split(' ')[0].length === 0) return x.split(' ');
  return x.split(' ').sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
}

//OR

function last(x) {
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
