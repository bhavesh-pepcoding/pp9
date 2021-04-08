// function sum (n1, n2, print) {
//     let ans = n1 + n2;
//     print(ans);
// }

// function print(val) {
//     val += 5;
//     console.log(val);
// }

// sum(2,3,print);

const fs = require("fs");


// function print(err,data) {
//     if(!err) {
//         console.log(data);
//     } else {
//         console.log(err);
//     }
// }
// fs.readFile("q.html","utf-8",print);



// function outer() {
//     console.log("outer is running")
//     console.log("I am outer");
//     console.log("outer is returning something");
//     return function inner() {
//         console.log("I am inner")
//     }
// }
// let innerRef = outer();
// innerRef();
// function firstName(fname) {
//     console.log("Your first Name is", fname)
//     return function lastname(lName) {
//         console.log(fname + " " + lName);
//     }
// }
// let lastNameFnRef = firstName("Jasbir");
// console.log("`````````````````````````");
// lastNameFnRef("Singh");


// let count = 0;

// function callback(err,data) {
//     if(!err) {
//         console.log(data);
//         count += 1;
//         if(count < 10)
//         {
//         fs.readFile("q" + (count + 1) + ".html", "utf-8", callback);}
//     } else {
//         count += 1;
//         if(count < 10)
//         {
//         fs.readFile("q" + (count + 1) + ".html", "utf-8", callback);}
//     }
// }

// fs.readFile("q1.html","utf-8",callback);

// function callback(err,data) {
//     if(!err) {
//         console.log(data);
//     }
// }
// for(let i = 1; i <= 10; i++) {
//     fs.readFile("q" + i + ".html", "utf-8",callback);
// }





