// async function abc() {
//     console.log("hello");
//     throw "abc";
// }

// let temp = abc();
// console.log(temp);


// function abc() {
//     return new Promise(function(res,rej){
//         console.log("hello");
//         res("abc");
//     });
// }

// let temp = abc();
// console.log(temp);



const fs = require("fs");

// async function abc () {
//     let data = await fs.promises.readFile("abc.txt", "utf-8");
//     console.log(data);
//     throw "error";
// }

// abc().then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })


// function abc() {
//     return new Promise(function (res, rej) {
//         fs.promises.readFile("abc.txt", "utf-8").then(function (data) {
//             console.log(data);
//             rej("error");
//         })
//     })
// }

// abc().then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// })

// async function abc () {
//     await fs.promises.writeFile("1.txt", "hello");
//     let data = await fs.promises.readFile("1.txt", "utf-8");
//     console.log(data);
//     return "how are you";
// }

// async function main() {
//     let data = await abc();
//     console.log(data);
// }

// main();


// function abc() {
//     return new Promise(function(res,rej) {
//         fs.promises.writeFile("1.txt", "hello").then(function(){
//             fs.promises.readFile("1.txt", "utf-8").then(function(data){
//                 console.log(data);
//                 res("how are you");
//             });
//         });
//     });
// }

// function main() {
//     return new Promise(function(res,rej) {
//         abc().then(function(data) {
//             console.log(data);
//         });
//     });
// }

// main();


let p1 = fs.promises.readFile("abc.txt","utf-8").then(function(data){
    console.log("p1 completed");
    return data;
});
let p2 = fs.promises.readFile("1.txt","utf-8").then(function(data){
    console.log("p2 completed");
    return data;
});

let combinedPromise = Promise.all([p1,p2]);

combinedPromise.then(function(data){
    // console.log(data);
}).catch(function(err){
    console.log(err);
})