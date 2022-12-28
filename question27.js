//12/14/22
// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

// describe("Ransom Note", () => {
//  it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est love", magazine), false);
//  });

// it("Should return true", () => {
//   assert.equal(ransomNote("sit ad est sint in in", magazine), true);
//  });

// it("Should return false", () => {
//   assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
//  });
// });

// function ransomNote(str, magazine) {
//   //iterate through each letter in the magazine and get a count for each letter
//   //iterate through each letter in the str and get a count for each letter
//   //check to see if count in str < count in magazine
//   str = str.split(' ');
//   magazine = magazine.replaceAll('.', '').replaceAll(',', '').split(' ');
//   let magWords = {},
//     strWords = {},
//     result = true;
//   for (const word of magazine) magWords[word] = magWords[word] + 1 || 1;
//   for (const word of str) strWords[word] = strWords[word] + 1 || 1;

//   for (let word in strWords) {
//     strWords[word] <= magWords[word] ? (result = true) : (result = false);
//   }
//   return result;
// }

//OR

const ransomNote = (note, magazine) => {
  const magazineWords = magazine.split(' ');
  const magazineHash = {};

  magazineWords.forEach(word => (magazineHash[word] = magazineHash[word] + 1 || 1));

  const noteWords = note.split(' ');
  let possible = true;

  noteWords.forEach(word => {
    if (magazineHash[word]) {
      magazineHash[word]--;
      if (magazineHash[word] < 0) possible = false;
    } else possible = false;
  });

  return possible;
};

console.log(ransomNote('sit ad est sint', magazine));
console.log(ransomNote('sit ad est love', magazine));
console.log(ransomNote('sit ad est sint in in', magazine));
console.log(ransomNote('sit ad est sint in in in in', magazine));
