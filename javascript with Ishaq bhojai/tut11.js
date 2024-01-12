// // ASYNC CODE IN JS:

// // 1- CALL BACK FUNCTION:

//    // * settimeout 
// console.log("hey mey call back se pehle wala hon");

// setTimeout(()=>{
// console.log("hey, iam call back");
// },1000);

// console.log("hey me call back ke baad wala hon");

//    // * settimeinterval
//  console.log("hey, iam before call back"); 

//  setInterval(() => {
//     console.log("hey, iam call back");
//  }, 1000);

//  console.log("hey iam, after call back");

// // 2- PROMISES:

//  let promise= new Promise((such,jhoot)=>{
//     let n=false;

//     if (n===true) {
//         return such();
//     }else{
//         return jhoot();
//     }
//  });

//  promise.then(()=>{
//     console.log("hey, me such hon");
//  });

//  promise.catch(()=>{

//     console.log("hey, me jhoot hon");
//  });


// // 3- ASYNC AND AWAIT:

// let asyncCode= async function () {
// //pehle user se name puchenge jb tk we apna name nhi btaega hm apna name print nhi krwaenge:
//     let userName=await "mustafa"
//     let myName=await "bilal";
//     console.log(userName);
//     console.log(myName);
// };
// asyncCode();
// console.log("me badd me aaonga");

// 4 PROMISES CODE:

//code no 01
const promiseOne = new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log("promise no 01");
      resolve();
   }, 1000);
});
promiseOne.then(() => {
   console.log("promise one completed");
}).catch(() => {
   console.log("ERROR");
})

//code no 02
new Promise((resolve, reject) => {
   setTimeout(() => {
      console.log("promise no 02");
      resolve();
   }, 1000);
}).then(() => {
   console.log("promise two completed");
}).catch(() => {
   console.log("ERROR");
});

//code no 03:
let promiseThree = new Promise((resolve, reject) => {
   let error = false;
   if (!error) {
      resolve({ userName: "bilal", id: 123 })
   } else {
      reject("promise three isn't completed")
   };
});

promiseThree
   .then((user) => {
      console.log(`you name is: ${user.userName}`);
      return user.id
   })
   .then((userId) => {
      console.log(`your id is: ${userId}`);
   })
   .catch((error) => {
      console.log(`ERROR:${error}`);
   })
   .finally(() => {
      console.log("i don't know about promise");
   });

//code no 04 : try/catch method
let promiseFour = new Promise((resolve, reject) => {
   setTimeout(() => {
      let error = true;
      if (!error) {
         resolve({ userName: "bilal", id: 123 })
      } else {
         reject("promise three isn't completed")
      };
   }, 2000);
});

async function promiseFourConsumed() {
   try {
      const response = await promiseFour
      console.log(response);
   } catch (error) {
      console.log(error);
   };
};
promiseFourConsumed();

//Fetch in JS:
