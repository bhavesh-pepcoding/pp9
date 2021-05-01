const fs = require("fs");
let sum = 0;
let fileName = 1;
function readfile(err,data) {
    if(!err) {
        let arrData = data.split("\n");
        for(let i = 0; i < arrData.length; i++) {
            sum += parseInt(arrData[i]);
        }
        fileName += 1;
        if(fileName > 8) {
            console.log(sum);
            return;
        }
        fs.readFile(fileName + ".txt", "utf-8", readfile);
    }
}

fs.readFile(fileName + ".txt", "utf-8", readfile);