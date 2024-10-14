function maxChar(str) {
  const countChar = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (countChar[char]) {
      countChar[char]++;
    } else {
      countChar[char] = 1;
    }
  }

  let max = 0;
  let maxChar = "";

  for (let char in countChar) {
    if (countChar[char] > max) {
      max = countChar[char];
      console.log(max, "max");
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));
