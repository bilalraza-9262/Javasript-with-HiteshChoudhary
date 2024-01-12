// //  ++++++++++++++++++++++++++ OBJECT ORIENTED PROGRAMMING+++++++++++++++++++++++++++++


// // MAKING SELF PORTOTYPE:

// //making globaly prototype:
// Object.prototype.bilal = () => {
//     console.log("men bilal");
// }
// let arr = [1, 3, 4]
// arr.bilal()


// //here making self function prototype:
function myNewProtoType(shirt, price) {
    this.shirt = shirt;
    this.price = price
};
myNewProtoType.prototype.shirtPrice = function (price) {
    console.log(`my shirt is ${this.shirt} and its  price is ${this.price + price}`);
};
let myShirt =new myNewProtoType("nike", 500)
myShirt.shirtPrice(50)

// //making prototype for true lenght as a string:
// let myName = "         Bilal    ";
// String.prototype.trueLenght = function () {
//     console.log(`True lenght is ${this.trim().length}`);
// }
// myName.trueLenght();

// //Inheritence:

// //old version of proto
// let a = {
//     name: "bilal",
//     age: 18
// };
// console.log(a);
// let b = {
//     isFriend: true,
//     friendName: "huzair"
// }

// b.__proto__ = a
// console.log(b.name);

// //updated version of proto
// let user = {
//     name: "bilal",
//     age: 17
// };
// let usercourse_01 = {
//     course_01: "web development",
//     price: 5000
// };

// Object.setPrototypeOf(user, usercourse_01)
// console.log(user.course_01);


// //CALL METHOD:

// //1ST example
// let obj1 = {
//     name: "bilal",
//     age: 19,
//     getUserDetails: function () {
//         console.log(this.name, this.age);
//     }
// };

// obj1.getUserDetails();

// let obj2 = {
//     name: "huzair",
//     age: 19
// }
// obj1.getUserDetails.call(obj2)

// //2nd example
// let details = {
//     name: "bilal",
//     contact: "0316"
// };
// let printDetails = function (state) {

//     console.log(`his name is ${this.name} and his state is ${state}`);
// }
// printDetails.call(details, "Pakistan ")

// //3rd example
// function getUserDetails(userName) {
//     this.userName = userName
// };

// function setUserDetails(name, email, password) {
//     getUserDetails.call(this, name)
//     this.email = email;
//     this.password = password
// }
// let myDetails = new setUserDetails("bilal", "email@a.com", "12345");
// console.log(myDetails);

// //APPLY METHOD:

// //1st example
// function myDetails(a, b) {
//     console.log(`${this.name} age is ${a + b}`);
// }
// let person = {
//     name: "Muhammad",
//     twoNumabers: [15, 2]
// };

// myDetails.apply(person, person.twoNumabers)

// //2nd example
// function sum(a, b) {
//     return a + b;
// }
// const args = [5, 10];
// sum.apply(null, args);

// //BIND METHOD:
// // if you want to understand  "bind method" so you will go the file of (bindMethod.html)

// //CLAASSES:
// class railaway {
//     submit() {
//         console.log(this.name + " submitted his form for " + this.railawayNo);
//     }
//     cancel() {
//         console.log(this.name + " cancel his formfor " + this.railawayNo);
//     }
//     fill(name, railwayNo) {
//         this.name = name;
//         this.railawayNo = railwayNo
//     }
// };


// let bilalForm = new railaway;
// bilalForm.fill("Bilal", 1234)
// let huzairForm = new railaway;
// huzairForm.fill("Huzair", 5678)

// bilalForm.submit();
// huzairForm.submit();
// bilalForm.cancel();


// class Userdetails {
//     constructor(name, password) {
//         this.name = name;
//         this.password = password
//     };
//     nameWrong() {
//         console.log(`your name "${this.name}" is wrong`);
//     };
//     passwordWrong() {
//         console.log(`your password "${this.password}" is worng`);
//     };
// };

// let userDetails = new Userdetails("bilal", 12345);
// console.log(userDetails);
// userDetails.nameWrong();
// userDetails.passwordWrong();


//EXTEND AND SUPER KEYWORD IN OOP:
// class students {
//     //name;
//     constructor(failedStudent) {
//         this.name = failedStudent
//     };

//     failed() {
//         console.log(`failed students is ${this.name}`);
//     };

// };

// class student_01 extends students {
//     //name1;
//     email;
//     pass;
//     constructor(name1, email, passStudent, countFailed) {
//         super(countFailed)
//         this.name1 = name1
//         this.email = email;
//         this.pass = passStudent
//     };
//    /* static */ passStudent() {
//         console.log(`The name of pass student is "${this.pass}"`);
//     }

// };


// const allStudents = new student_01("bilal", "bial12@google.com", "bilal",);
// console.log(allStudents);
// allStudents.failed();
// allStudents.passStudent();

// console.log(allStudents instanceof students);//true
// console.log(allStudents instanceof student_01);//true


//example of super keyword
class Shop {
    constructor(_name, _address) {
        this._name = _name;
        this._address = _address;
    }
    get name() {
        return this._name;
    }
    get address() {
        return this._address;
    }
}

class Clothes extends Shop {
    constructor(name, address, _size, _color, _price) {
        super(name, address);
        this._size = _size;
        this._color = _color;
        this._price = _price;
    }
}

const clothingStore = new Clothes("bilal", "shop no 21", 12, "red", 234);
console.log(clothingStore);



//GETTER AND SETTER:

// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     };

//     get name() {
//         console.log(`my name is ${this._myName.toUpperCase()}`);
//     };
//     set name(myName) {
//         this._myName = myName
//     }
// };
// let myInform = new Person("bilal", 17, "male");
// myInform.name
// console.log(myInform);

//MODRN FUNCTIOPN BASED GETTER AND SETTER:

// function User(name, email, password) {
//     this._name = name;
//     this._email = email;;
//     this._password = password;

//     Object.defineProperty(this, "name", {
//         get: function () {
//             return `my name is ${this._name.toUpperCase()}.`
//         },
//         set: function (value) {
//             this._name = value;
//         }
//     });
//     Object.defineProperty(this, "email", {
//         get: function () {
//             return `my email is ${this._email}.`
//         },
//         set: function (value) {
//             this._email = value;
//         }
//     });
//     Object.defineProperty(this, "password", {
//         get: function () {
//             return `my password is ${this._password}abc.`
//         },
//         set: function (value) {
//             this._password = value;
//         }
//     });
// };
// const details = new User("bilal", "Email@.com", 123);
// console.log(details.name);
// console.log(details.email);
// console.log(details.password);
