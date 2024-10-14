function isAnagram(str1, str2) {
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  console.log(sortedStr2);
  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("hello", "olleh")); // true
// console.log(isAnagram("test", "text")); // false
// console.log(isAnagram("aabb", "abab")); // true
// console.log(isAnagram("aabb", "abbb")); // false
