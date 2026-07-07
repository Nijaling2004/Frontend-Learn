let arr = [1, 2, 3, 4];
for (let val of arr) {
  console.log(val);
}

let str = "Bengaluru";
for (let char of str) {
  console.log(char);
}

//object : for in
let obj = {
  name: "samya",
  city: "managole",
};

for (let key in obj) {
  console.log(key + " " + obj[key]);
}
// program to frequence of character
let city = "Bangglore";

let freq = {};
for (let char of city) {
  console.log(char);
  freq[char] = (freq[char] || 0) + 1;
}
console.log(freq);
