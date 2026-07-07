function isAnagram(srt1, str2) {
  let value1 = srt1.split(" ").sort().join("");
  let value2 = str2.split(" ").sort().join("");

  return value1 == value1;
}
let op = isAnagram("abc,bac");
console.log("value", op);
