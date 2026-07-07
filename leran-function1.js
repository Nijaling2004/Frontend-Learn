let str = "hello i am attending class";
function LargestWord(sentence) {
  let arr = sentence.split(" ");
  let large = " ";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > large.length) {
      large = arr[i];
    }
  }
  return large.length;
}
console.log("largestword is", LargestWord(str));
