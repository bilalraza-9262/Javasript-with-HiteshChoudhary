


let person = {

  name: "bilal",
  //[mySym]:true,
  age: 18,
  hobbies: ["cricket", "footbal"],
  skills: ["developer", "image designer"],

  greet: function () {
    console.log("hello " + /*person.name*/ this.name);
  }

}

person.greet()

person.greet2 = function () {
  console.log(`my age is  ${this.age}`);
}

//person.greet2()

let mySym = Symbol("name")
// person[mySym]="bilal"
// console.log(typeof person[mySym]);


// EDIT OBJECT:

// //delete person.name

// person["learn"] = {
//     learning: "quran",
//     study: "inter"
// }

// person.profession=["development","hafiz quran"]

console.log(person);


// FREEZE METHOD IN OBJECT:

const nestedObject = {
  prop1: "value1",
  prop2: {
    nestedProp: "nestedValue"
  }
};

Object.freeze(nestedObject);
Object.freeze(nestedObject.prop2);

nestedObject.prop1 = "new value"; // This change will be ignored
nestedObject.prop2.nestedProp = "new nested value"; // This change will be ignored

console.log(nestedObject); // Output: { prop1: 'value1', prop2: { nestedProp: 'nestedValue' } }


let obj1 = {

  name: "bilal",
  age: 10,
  education: "4th class"

}

let obj2 = {

  1: "salman",
  2: 13,
  3: "6th class",
  4:"7th class"
}

let obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

//Object De-structure:

let my_obj = {
  myname: "bilal",
  myage: 17
};
const { myname: name, myage: age } = my_obj;

console.log(name);//output:"bilal"
console.log(age);//output:17

// REST AND SPREAD OPERATOE:

// rest for array:
let arr = [1, 3, 4, 2, 4]
function abc(nam1, nam2, ...arr) {
  console.log(nam1, nam2, arr);
};
abc(1, 2, arr)

//spread for array:
let arr2 = [1, 2, 3, 4];
function spreader(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
};
let add = spreader(...arr2);
console.log(add);

console.log(Math.round(Math.random()*10)+10);