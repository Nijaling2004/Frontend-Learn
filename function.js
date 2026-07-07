let arr = [1, 2, 2, 3, 4, 5, 5, 5];
let removedDuplicates = [];

for (let i = 0; i < arr.length; i++) {
  if (removedDuplicates.indexOf(arr[i]) == -1) {
    removedDuplicates.push(arr[i]);
  }
}
console.log(removedDuplicates);

let arr = [1, 2, 2, 3, 4, 5, 5, 5];
function printUniq(ar) {
  let removedDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (removedDuplicates.indexOf(ar[i]) == -1) {
      removedDuplicates.push(ar[i]);
    }
  }
  return removedDuplicates;
}
let uniqValue = printUniq(arr);
console.log(uniqValue);
