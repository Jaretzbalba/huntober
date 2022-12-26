//12/07/22
// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

function maxCharacter(str) {
  let count = {};
  for (const letter of str) {
    count[letter] = count[letter] + 1 || 1;
  }

  let result = ['', 0];
  for (const [key, value] of Object.entries(count)) {
    if (value > result[1]) {
      result = [key, value];
    }
  }
  return result[0];
}

//OR

const max = string => {
  const characters = {};

  for (let character of string) characters[character] = characters[character] + 1 || 1;

  let maxCount = 0;
  let maxCharacter = null;

  for (let character in characters) {
    if (characters[character] > maxCount) {
      maxCount = characters[character];
      maxCharacter = character;
    }
  }

  return maxCharacter;
};

console.log(maxCharacter(`staaaaarrrrrry`));
console.log(max(`staaaaarrrrrry`));
