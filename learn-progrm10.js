let city = "Bangglore";

let freq = {};
for (let char of city) {
  console.log(char);
  freq[char] = (freq[char] || 0) + 1;
}
console.log(freq);

