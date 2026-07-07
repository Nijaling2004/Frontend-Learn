let transaction = {
  upi: "Aa@.com",
  number: "4566",
};
console.log(transaction.upi);
console.log(transaction["upi"]);

transaction["account"] = "ICICI";

console.log(transaction);
// object methods

console.log(Object.keys(transaction));
console.log(Object.values(transaction));

let obj1 = {
  name: "david",
  age: 20,
};

let obj2 = {
  name: "johnson",
  city: "Bangalore",
};

Object.assign(obj2, obj1);
console.log(obj1);
console.log(obj2);

let transctions = [
  { upi: "a", number: "2344", status: "SUCCESSS" },
  { upi: "b", number: "2234", status: "failure" },
  { upi: "c", number: "2124", status: "SUCCESSS" },
  { upi: "d", number: "2244", status: "failure" },
];

console.log(transctions);
console.log(transctions.length);

let newArr = [];
for (let i = 0; i < transctions.length; i++) {
  console.log("value is", transctions[i].status);
  if (transctions[i].status == "failure") {
    newArr.push(transctions[i]);
  }
}
console.log(newArr);
