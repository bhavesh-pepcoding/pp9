const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.espncricinfo.com/series/the-marsh-cup-2020-21-1244113/victoria-vs-south-australia-14th-match-1244137/full-scorecard",callback);
let batsmenColumns;
let finalData = [];
function callback(err,res,html) {
    if(!err) {
        fs.writeFileSync("bday.html",html);
        let $ = cheerio.load(html);
        batsmenColumns = $(".batsman-cell a"); 
        for(let i = 0; i < batsmenColumns.length; i++) {
            let batsmenUrl = $(batsmenColumns[i]).attr("href");
            request("https://www.espncricinfo.com" + batsmenUrl ,getBirthday);
        }

    }
}


function getBirthday(err,res,html) {
    if(!err) {
        let $ = cheerio.load(html);
        let data = $(".player_overview-grid h5");
        let batsmenName = $(data[0]).text();
        let batsmenBirthday = $(data[1]).text();
        finalData.push({
            "Name" : batsmenName,
            "Birthday": batsmenBirthday
        });
        if(finalData.length == batsmenColumns.length) {
            fs.writeFileSync("finalData.json", JSON.stringify(finalData));
        }
    }
    
}