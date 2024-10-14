function findFirstNonRepeatingCharacter(str) {
  if (!str) return null;

  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(findFirstNonRepeatingCharacter("aabbccddeeffg"));
console.log(findFirstNonRepeatingCharacter("xxyz"));
console.log(findFirstNonRepeatingCharacter("aabbcc"));
