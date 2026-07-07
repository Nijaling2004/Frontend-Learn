function sayHello() {
  console.log(" say hello");
}

sayHello();

function sum(a, b) {
  console.log("sum is", a + b);
}
sum(5, 10);

//normal functiom
// fn with argumnet
// fu with return value

function sum(a, b) {
  return a + b;
}

let sumValue = sum(5, 10);
console.log(sumValue);
console.log("sum is", sum(5, 10));

//function expression//

let sayHello2 = function () {
  console.log("say Hi");
};
sayHello2();

// function expression with argumnets

let add = function (a, b) {
  console.log("sum is", a + b);
};
add(50, 10);

// fuction expression with substitution

let substitution = function (a, b) {
  console.log("sub is", a - b);
};
substitution(50, 10);

//let addtion = addValue(5, 10);
//console.log("added value is", addition);//

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

let city = "Bang     alore";
console.log("city", city.length);
console.log("city", city.trim(), city.length);
