const fs = require("fs");


function main() {
    let fileWrittenPromise = writefile("1.txt");
    for (let i = 2; i <= 8; i++) {
        fileWrittenPromise = fileWrittenPromise.then(function () {
            console.log(i-1 + " file written");
            return writefile(i + ".txt");
        });
    }
    fileWrittenPromise.then(function(){
        console.log("last file written");
    })
}

function writefile(fileName) {
    let numberOfLines = Math.floor(Math.random() * 101);
    let data = "";
    for (let i = 0; i < numberOfLines; i++) {
        if (i == numberOfLines - 1) {
            data += Math.floor(Math.random() * 101);
        } else {
            data += Math.floor(Math.random() * 101) + " \n";
        }
    }
    return fs.promises.writeFile(fileName, data);
}

main();