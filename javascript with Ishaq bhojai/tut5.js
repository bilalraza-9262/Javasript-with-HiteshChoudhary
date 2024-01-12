//STRING METHOD:
//strings are immutable that means it does not change.

let name = "bilal";

//console.log(name.toString());  //it convered any type of data into string.

//console.log(name.toLowerCase());  //converd all element into lower case.

//console.log(name.toUpperCase());  // convered all element into upper case.

//console.log(name.slice(2,4));  //copy element.

//console.log(name.indexOf("b"));  //find index of element from start of string.

//console.log(name.lastIndexOf("il"));  //find index of element from end of string.

//console.log(name.charAt(name.length-1));  //copy only one word.

//console.log(name.replace("bilal","fawad"));  //replace element with another element.

//console.log(name.includes("bil"));  // Returns true if the string contains the specified substring; otherwise, false.

//console.log(name.startsWith("b"));  //Returns true if the string starts with the specified prefix; otherwise, false.

//console.log(name.endsWith("lal"));  //Returns true if the string ends with the specified suffix; otherwise, false.

//console.log(name.search("l"));  //when you search true element then it retuns index of true element.otherwise it retuns "-1".

//console.log(name.charCodeAt("a"));  //Returns the Unicode value of the character at the specified index in the string.

//console.log(String.fromCharCode(69));  //this method is allows you to create a string from a sequence of Unicode values.

//console.log(name.repeat(3));  //this method is used to create a new string by concatenating the original string a specified number of times. 

console.log(name.split("i", 1));  //this method is used to split a string into an array of substrings based on a specified separator.



let friend = "huzair";
//console.log(name.concat(" is a friend of ", friend));

let bro = "     hanzala     "
//console.log(bro.trim());//"trim" can be used  for take out space


//MATH NUMBER METHOD:

let num = 2.4;
let num2 = 4;

// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.sqrt(num2));
// console.log(Math.cbrt(125));
// console.log(Math.min(859,69,18));
// console.log(Math.max(100,68,300));
// console.log(Math.sin(90));
// console.log(Math.cos(180));
// console.log(Math.tan(45));
// console.log(Math.pow(7,4));
// console.log(Math.sign(-89));
// console.log(Math.PI);
// console.log(Math.copys);

let arr = {
	name: "bilal",
	age: 12
}
for (const iterator in arr) {
	console.log(arr[iterator]);
}

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

console.log(text);


