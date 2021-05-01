const fs = require("fs");
let totalFileRead = 0;
let sum = 0;
function callback(filename,err,data) {
    if(!err) {
        let arrData = data.split("\n");
        for(let i = 0; i < arrData.length; i++) {
            sum += parseInt(arrData[i]);
        }
        totalFileRead += 1;
        console.log(filename + " has been read");
        if(totalFileRead == 8) {
            console.log(sum);
        }
    }
}

for(let i  =1; i <= 8; i++) {
    fs.readFile(i + ".txt", "utf-8", callback.bind(this,i +".txt"));
}
