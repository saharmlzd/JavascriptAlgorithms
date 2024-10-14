function findFirstNonRepeatingCharacter(str) {
  if (!str) return null;

  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(findFirstNonRepeatingCharacter("aabbccddeeffg"));
console.log(findFirstNonRepeatingCharacter("xxyz"));
console.log(findFirstNonRepeatingCharacter("aabbcc"));
