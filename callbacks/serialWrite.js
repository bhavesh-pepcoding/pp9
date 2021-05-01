const fs = require("fs");

let fileName = 0;
function writefile(err) {
 if(!err && fileName < 8) {
     fileName += 1;
     let numberOfLines = Math.floor(Math.random() * 101);
    //  let arr = [];
    //  for(let i = 0; i < numberOfLines; i++) {
    //     arr.push(Math.floor(Math.random() * 101));
    //  }
    //  let data = arr.join("\n");
    let data ="";
    for(let i = 0; i < numberOfLines; i++) {
        if(i == numberOfLines - 1) {
            data += Math.floor(Math.random() * 101);
        } else {
            data += Math.floor(Math.random() * 101) + " \n";
        }
    }
     fs.writeFile(fileName + ".txt",data,writefile)
 }
}

writefile(undefined);
