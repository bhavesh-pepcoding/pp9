const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results",callback);
let finalData = [];
let count = 0;
let totalMatches;
function callback(err,res,html) {
    if(!err) {
        let $ = cheerio.load(html);
        let scorecards = $('a[data-hover="Scorecard"]');
        // console.log(scorecards.length);
        totalMatches = scorecards.length;
        for(let i = 0; i < scorecards.length; i++) {
            finalData.push({})
            let url = $(scorecards[i]).attr("href");
            // console.log(url);
            request("https://www.espncricinfo.com" + url,getMatchInfo.bind(this,i));
        }

    }
}

function getMatchInfo(idx,err,res,html) {
    if(!err) {
        let $ = cheerio.load(html);
        let teamNamesDiv = $(".name-link");
        // console.log(teamNamesDiv.length);
        let team1 = $(teamNamesDiv[0]).text();
        let team2 = $(teamNamesDiv[1]).text();
        finalData[idx][team1] = { "batting" : {"players" : []}, "bowling" : {"players" : []}};
        finalData[idx][team2] = { "batting" : {"players" : []}, "bowling" : {"players" : []}};
        let tables = $(".table.batsman");
        let keysArray = ["playerName","","runs","balls","","4's","6's","SR"];
        for(let i = 0; i < tables.length; i++) {
            let rows = $(tables[i]).find("tbody tr");
            for(let j = 0; j < rows.length; j+=2) {
                let columns = $(rows[j]).find("td");
                let playerInfo = {};
                for(let k = 0; k < columns.length; k++) {
                    if(k != 1 && k != 4 ) {
                        playerInfo[keysArray[k]] = $(columns[k]).text();
                    }
                }
                if(i == 0) {
                    finalData[idx][team1]["batting"]["players"].push(playerInfo);
                } else if(i == 1) {
                    finalData[idx][team2]["batting"]["players"].push(playerInfo);
                }
            }
        }
        tables = $(".table.bowler");
        keysArray = ["playerName","o","m","r","w","econ","0's","4's","6's","wd","nb"];
        for(let i = 0; i < tables.length; i++) {
            let rows = $(tables[i]).find("tbody tr");
            for(let j = 0; j < rows.length; j++) {
                let columns = $(rows[j]).find("td");
                let playerInfo = {};
                for(let k = 0; k < columns.length; k++) {
                    playerInfo[keysArray[k]] = $(columns[k]).text();
                }
                if(i == 0) {
                    finalData[idx][team1]["bowling"]["players"].push(playerInfo);
                } else if(i == 1) {
                    finalData[idx][team2]["bowling"]["players"].push(playerInfo);
                }
            }
        }
        count += 1;
        if(count == totalMatches) {
            fs.writeFileSync("finalData.json", JSON.stringify(finalData));
        }
        
    }
}