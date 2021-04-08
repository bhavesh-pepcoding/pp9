const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.espncricinfo.com/series/australia-women-in-new-zealand-2020-21-1249224/new-zealand-women-vs-australia-women-1st-odi-1249241/full-scorecard",callback);

function callback(err,res,html) {
    
    if(!err) {
        let maxWickets = 0;
        let maxWicketPlayer;
        fs.writeFileSync("hello.html",html);
        let $ = cheerio.load(html);
        let rows = $(".table.bowler tbody tr");
        for(let i = 0; i < rows.length; i++) {
            let columns = $(rows[i]).find("td");
            let wickets = parseInt($(columns[4]).text());
            
            if(wickets > maxWickets) {
                maxWickets = wickets;
                maxWicketPlayer = $(columns[0]).text();
            }
        }
        console.log(maxWicketPlayer);
    }
}