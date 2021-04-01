#!/usr/bin/env node
const fs = require("fs");

let processData = process.argv;

if(processData[2] == "a") {
    let previousData = fs.readFileSync(processData[3],"utf-8");
    fs.writeFileSync(processData[3], previousData + "\n" + processData[4])
} else if(processData[2] == "w") {
    fs.writeFileSync(processData[3],processData[4]);
} else {
    let data = "";
    let iUpdated = false;
    for(let i = 2; i < processData.length; i++) {
        if(processData.includes("ne")) {
            if(!iUpdated) {
                i = i + 1;
                iUpdated = true;
            }
            let tempData = fs.readFileSync(processData[i],"utf-8");
            let lines = tempData.split("\n");
            if(tempData.includes("\r")) {
                lines = tempData.split("\r\n");
            }
            let finalData = "";
            for(let j = 0; j < lines.length; j++) {
                if(lines[j] != "") {
                    finalData += lines[j] + "\n";
                }
            }
            data += finalData;
        } else if(processData.includes("ns")) {
            if(!iUpdated) {
                i = i + 1;
                iUpdated = true;
            }
            let tempData = fs.readFileSync(processData[i],"utf-8");
            let arrData = tempData.split(" ");
            let finalData = arrData.join("");
            data += "\n"+finalData;
        }else {
            data += "\n" + fs.readFileSync(processData[i],"utf-8");
        }
        
    }
    console.log(data);
}


