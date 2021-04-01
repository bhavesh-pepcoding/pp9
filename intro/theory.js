// for(let i = 1; i<=10; i++) {
//     if(i % 2 == 0) {
//         console.log('even\n' + i);
//     } else {
//         console.log('odd\n' + i);
//     }
// }
// let  i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }
// let arr1 = [];
// arr1[11] = "hello";
// console.log(arr1.length);
// let arr = [1,2,3,'bhavesh'];
// arr[4] = "64656";
// console.log(arr);

// let arr2 = []; // 0

// arr2.push("bansal"); // element will be added in the end
// arr2.pop(); //last element will be deleted
// arr2[4] = "hello";
// console.log(arr2);

// console.log(arr[arr.length-1]);


// const a = [];
// a[1] = "bhavesh";
// console.log(a);


// let arr = ["red","green","white","blue","red","green","white","blue","red","green","white","blue","red","green","white","blue"];
// let ans = "";
// for(let i = 0; i < arr.length; i++) {
//     ans += arr[i];
// }
// console.log(ans);

// let arr = [[1,2,3],[4,5,6],[7,8,9]];

// let sum = 0;

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// console.log(sum);

// let ans = [];

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) {
//         ans[(i*arr.length) + j] = arr[i][j];
//     }
// }
// console.log(ans);

// let arr = [1,2,3,4,5];
// let max = 0;
// let ele;
// for(let i = 0; i< arr.length; i++) {
//     let count =0;
//     for(let j = i; j < arr.length; j++) {
//         if(arr[i]  == arr[j]) {
//             count += 1;
//         }
//     }
//     if(count > max) {
//         max = count;
//         ele = arr[i];
//     }
// }
// console.log(ele);

// let arr = [1,2,3,4];

// for(let i = 0; i < arr.length; i++) {
//     arr[i] += 2;
// }

// console.log(arr);

// function print(data,index) {
//     console.log(index,data);
// }
// function addTwo(d,i) {

//     return (d + i);
// }
// arr = arr.map(addTwo);
// console.log(arr);




// function abc() {
//     console.log("hello world");
// }

// abc();



// let arr = [1,2,3,4,5,6,7,8];

// let ans = [];

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] %2 != 0) {
//         ans.push(arr[i]);
//     }
// }

// console.log(ans);

// function removeEven(data,index) {
//     return (data % 2 != 0)
// }

// let ans = arr.filter(removeEven);
// console.log(ans);


// let a = 1;
// let b = 2;
// let c = 3;

// let str1 = "bhavesh";
// let str2 = 'bansal';
// let str3 = `pepcoding${a + b + c}`; // add variable using dollar

// console.log(str1,str2,str3);

// console.log(str1[6]);
// let str = "";
// for(let i = 0; i < str1.length; i++) {
//     str += str1[i];
// }
// console.log(str);

// console.log(parseInt("10"));


// function decimalToBinary(number) {
//     let ans = "";
//     while(number > 0) {
//         let rem = number % 2;
//         ans = rem + ans;
//         number = parseInt(number / 2);
//     }
//     console.log(ans);
// }

// decimalToBinary(parseInt("10"));

// function binaryToDecimal(binary) {
//     let ans = 0;
//     let power = 0;
//     for(let i = binary.length -1; i >=0; i--) {
//         let binaryDigit = parseInt(binary[i]);
//         ans += (Math.pow(2,power) * binaryDigit);
//         power += 1;
//     }
//     return ans;
// }

// console.log(binaryToDecimal("1010"));

// let string = "bhavesh bansal";
// console.log(string.substring(3,7));
// console.log(string.toUpperCase());

// let obj = {
//     "hello1" : 1,
//     2: "hello2",
//     "hello3": "three"
// }

// obj[2] = "two";
// obj["five"] = 5;
// console.log(obj["hello1"] == undefined);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// let string = "I love pepcoding";
// console.log(string.split(" ").join(" $ "));

// let arr = ["hello", "how", "are", "you"];
// console.log(arr.join(" "));

// let str = "bhavesh";
// console.log(str.charCodeAt(1));
// let abc = 0;
// function abc () {
//     console.log("hello");
// }
// abc();

// let abc = function () {

// }


// profile lookup
// Setup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(name, prop){
// // Only change code below this line
//     for(let i = 0; i < contacts.length; i++) {
//         if(contacts[i].firstName == name && contacts[i][prop] != undefined) {
//             return contacts[i][prop];
//         }
//     if(contacts[i].firstName == name && contacts[i][prop] == undefined) {
//             return "No such property";
//         }
//     }
//     return ("No such contact")

// // Only change code above this line
// }

// lookUpProfile("Akira", "likes");


// count characters

// let str = "abcaddefa"
// let obj = {};
// for(let i = 0; i < str.length; i++) {
//     if(obj[str[i]] == undefined) {
//         obj[str[i]] = 1;
//     } else {
//         obj[str[i]] += 1;
//     }
// }
// console.log(obj);


// let str = "my name is bhavesh";
// let ans = "";
// if(str[0] != " ") {
//  ans += str[0].toUpperCase();
// }
// for(let i = 1; i < str.length; i++) {
//     if(str[i-1] != " ") {
//         ans += str[i];
//     } else {
//         ans += str[i].toUpperCase();
//     }
// }
// console.log(ans);

// let str = "hello how are you";

// let ans = "";
// let tempans = "";
// for(let i = str.length -1; i >= 0; i--) {
    
//     if(str[i] == " ") {
//         ans = " " +tempans + ans;
//         tempans = "";
//     } else if(i == 0) {
//         ans = tempans + str[i] + ans;
//     }else {
//         tempans += str[i];
//     }
// }

// console.log(ans);

// 1 april, 2021

// let vs var

// {
//     let i = 0;
// }

// console.log(i);


// {
//     var i = 0;
// }

// console.log(i);

// function abc () {
//     {
//         var  i = 0;
//     }
//     console.log(i);
// }
// abc();
// console.log(i);


// {
//     const i = 0;
//     {
        
//         console.log(i);
//     }
//     console.log(i);
// }

// var i = 0;
// i = 1;

// let arr1 = [0,1,2,3];
// let arr2 = ["a","b","c"];

// let ans = {};

// if((arr1.length != arr2.length) || arr1.length == 0 || arr2.length == 0) {
//     console.log("not possible");
// } else {
//     for(let i = 0; i < arr1.length; i++) {
//         ans[arr1[i]] = arr2[i];
//     }
//     console.log(ans);
// }

