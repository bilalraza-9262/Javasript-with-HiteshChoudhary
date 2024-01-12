// DATE, TIME, DAY AND YEAR METHOD:

// 1-GET:

let currenttime = new Date();
//let currenttime = new Date("01-03-2023");

// console.log(currenttime);
// Sat Aug 26 2023 21:10:15 GMT+0500 (Pakistan Standard Time)

// console.log(currenttime.toLocaleDateString());
// 26/08/2023

// console.log(currenttime.toLocaleString());
// 26/08/2023, 21:10:15

// console.log(currenttime.toLocaleTimeString());
// 21:10:15

// console.log(currenttime.toUTCString());
// Sat, 26 Aug 2023 16:10:15 GMT

// console.log(currenttime.toJSON());
// 2023-08-26T16:10:15.690Z

// console.log(currenttime.getTimezoneOffset());
// -300

//console.log(currenttime.getDate());
//console.log(currenttime.getDay());
//console.log(currenttime.getFullYear());
//console.log(currenttime.getHours());
//console.log(currenttime.getMonth());
//console.log(currenttime.getMinutes());
//console.log(currenttime.getSeconds());
//console.log(currenttime.getMilliseconds());

let newDate = currenttime.toLocaleString("default", {
  weekday: "short",
});
console.log(newDate);

//find how time will have?

// let domensday = new Date("jun 30 , 2035");
// let today= new Date();

// let domenstime = domensday.getTime();
// let todaytime= today.getTime();

// let livingTime = domenstime-todaytime;

// console.log(livingTime/(1000 * 60 * 60 *24));

// 2-SET:

let day = new Date();

//day.setDate(20);
//day.setFullYear(2040);
//day.setHours(7);
//day.setMonth(9);
//day.setMinutes(40);
//day.setSeconds(20);
//day.setMilliseconds(600);

console.log(day);

//  FUNCTION:

//SIMPLE FUNCTION:

// function name(hp) {
//     let myname = "bilal";

//     console.log("hello " + myname +" my friend is " + hp);
// }
// name("huzair");

//RETURN FUNCTION:

//find marks
// function totalmarks(eng,math,physics,comp,urdu) {
//     let sum =eng+math+physics+comp+urdu;
//     return sum;
// }
// let marks=totalmarks(80,70,75,60,55)
// console.log(marks);

// //find percentage
// function totalpercentage(tp) {
//     return tp/500*100;
// }
// let percentage=totalpercentage(marks)
// console.log(percentage);

function students(myName, myRoll, myTeacher, myAge) {
  return {
    name: myName,
    rollNo: myRoll,
    teacher: myTeacher,
    age: myAge,
  };
}
console.log(students("bilal", 2184, "ishaq", 17));

// ARROW FUNCTION:

// let square = num=>  num*num;
// square(5)

// let add =(num1,num2)=>num1+num2;
// add(5,8)

const loop = (number) => {
  for (let i = 0; i < number; i++) {
    let name = "bilal";
    console.log(`${i} ${number}`);
  }
};

loop(6);

//RECURSION:

//begining example
function writeData(data, times) {
  console.log(data);
  if (times > 0) {
    writeData(data, times - 1);
  }
}
writeData("hello", 4);

//advance examople
function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  }
  return 1;
}
console.log(factorial(3));

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));

// CLOUSERS:

function outerFunction(abc) {
  //let abc ="i am bilal"
  function innerFunction(def) {
    console.log(abc + def);
  }
  return innerFunction;
}
let clouser = outerFunction(7);
clouser(45);

function outer(a) {
  let abc = 5;
  return function (b) {
    console.log(abc + a + b);
  };
}
let clousers = outer(4);
clousers(7);

function sum(a) {
  let b = 2;
  return {
    getSum1: function (t) {
      return a + b + t;
    },
    getSum2: function (c) {
      return a + b + c;
    },
  };
}
let store = sum(3);
console.log(store.getSum1(4));
console.log(store.getSum2(5));
//CALL BACK FUNCTION:

function runAfter1Sec(val, cb) {
  setTimeout(() => {
    let data = 5 + val;
    cb(data);
  }, 1000);
}

runAfter1Sec(10, function (dataToGet) {
  console.log(`hey ${dataToGet}`);
});

// HOF (High Order Function)

const handler = (func) => {
    return (father) => {
      func(father);
      return "Bilal"
    };
  };
  
  const requesterFunc = handler((name) => {
    console.log(name);
  });
  requesterFunc("Nughman")

// IIFE:( Imediately Invoked Function Expressions)

//simple:
(function (name) {
  console.log(`i am ${name}`);
})("bilal"); // semi colon is must.

//arrow
(friend => console.log(`my friend is ${friend}`))("huzair");

//HOISTING:

useName();
console.log(a);
function useName() {
  console.log("hello");
}

var a = 10;
console.log(a);

// SWITCH STATEMENT:

let batsman = prompt("who is number 1 batsman?");
switch (batsman) {
  case "baber azam":
    alert("correct answer");
    break;
  case "rizwan":
    alert("50% ok");
    break;
  case "virat kholi":
    alert("correct but not better");
    break;
  default:
    alert("your answer isn't correct");
    break;
}

//this is not correct way:

let age = +prompt("What is your age?");
let ageCategory;

switch (true) {
  case age < 18:
    ageCategory = "child";
    break;

  case age >= 18 && age < 50:
    ageCategory = "valid";
    break;

  default:
    ageCategory = "not better";
    break;
}

switch (ageCategory) {
  case "child":
    alert("You are a child");
    break;

  case "valid":
    alert("You have a valid age");
    break;

  case "not better":
    alert("You have not provided a better age");
    break;
}
