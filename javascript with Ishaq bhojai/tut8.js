
// let student=["bilal","huzair","fawad"];
// localStorage.setItem("student",student)
// console.log(student);


let preStudent=localStorage.getItem("student");
let student=preStudent? JSON.parse(preStudent): [];
// preStudent ?JSON.parse(preStudent):
function provideStudent() {
    let std={
        name:prompt("what is your name"),
        age:+prompt("what is your age"),
        roll:+prompt("what is your roll number")
      
    };
      student.push(std);
      console.log(student); 
      //localStorage.setItem("student",student)
let converedString=JSON.stringify(student);
localStorage.setItem("student",converedString)
}

let bgColor=document.getElementsByClassName(btn);

