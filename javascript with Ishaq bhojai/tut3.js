// if and else statment:

let percentage = prompt("what is your percentage?")
percentage = Number.parseInt(percentage)
let grade;

if (percentage >= 0 && percentage <= 100) {

    if (percentage > 85) {
        grade = "A+";
    } else if (percentage > 70) {
        grade = "A"
    } else if (percentage > 60) {
        grade = "B"
    } else if (percentage > 40) {
        grade = "C"
    } else {
        grade = "D"
    } console.log(grade);

} else {
    console.log("enter correct percentage");
}

//NESTED IF STATEMENT:

let country=prompt("what is your country?")
let age=+prompt("what is your age?")
if (country==="pakistan"| "india"|"south Africa") {
    if (age===19) {
        console.log("here is your ticket");
    } else {
        console.log("invalid age");
    }
} else {
    console.log("invalid country");
}

// ARRAY:

//let num=[2,3,4,5];
//num.splice(2,0,7);
//num.splice(1,1);
//console.log(num);

// let friends=["bilal","mustafa","fawad","huzair","jami"];
// let copy=friends.slice(1,4);
// console.log(copy);

function get(myName,myRoll,myAge) {
    return {
        name:myName,
        roll:myRoll,
        age:myAge
    }
}
let student=[
get("bilal",12345,18),
"hello"
]
console.log(student);

console.log(get("bioal",12,123));

// LOOPS:
// 1- FOR LOOP:

let i;
for (i = 0; i <= 99; i++) {
    //console.log(i);
    console.log("hello" + i);
}

// Make a table of 3th from "for loop":

// for (let i = 1; i <= 10; i++) {
//     console.log("3 X " + i + " = " + i * 3);
// }

//taking a number from user and then make a table:

// let num = prompt("Enter a number");

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " X " + i + " = " + i * num);
// }

// Using "array" with (for loop):

// let players = ["Baber", "Rizwan", "Virat"]
// let inform = prompt("Enter a Great Player");
// let found = false;

// for (let i = 0; i < players.length; i++) {

//     if (inform.toLowerCase() === players[i].toLowerCase()) {
//         console.log("right answer");
//         found = true;
//         break;
//     }
// }
// if (!found) {
//     console.log("not found " + inform);
// }

//
///
////
/////
//////



// Nested "for loop":

for (let i = 1; i <= 5; i++) {
    let star = "*";

    console.log(star);
}

//find lenth from string 

var a = "bilal raza";
console.log(a.length);

//find copy from string:
console.log(a.slice(0, 5));

// function togglehide() {
//     let para = document.getElementById("para");
//     let btn = document.getElementById("btn");

//     if (para.style.display != "none") {
//         para.style.display = "none";
//     } else {
//         para.style.display = "block";
//     }
// }
let btn1=document.getElementById("btn");

function togglehide(){
    btn1.style.backgroundColor=('red')
}

togglehide();

