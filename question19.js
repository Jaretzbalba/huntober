// 11/30/22
// 7 kyu: Absent vowel
// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function absentVowel(x) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let indexArr = vowels.map(e => x.indexOf(e));
  return indexArr.indexOf(-1);
}
