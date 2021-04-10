const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request("https://www.github.com/topics",callback);

let finaldata = [];
function callback(err,res,html) {
    if(!err) {
        fs.writeFileSync("hello.html",html);
        let $ = cheerio.load(html);
        let divs = $(".no-underline.d-flex.flex-column.flex-justify-center");
        for(let i = 0; i < divs.length; i++) {
            let projectName = $($(divs[i]).find("p")[0]).text().split(" ")[8].split("\n")[0];
            let projectUrl = "https://github.com" + $(divs[i]).attr("href");
            finaldata.push({
                "projectName": projectName,
                "projectUrl": projectUrl,
                "gitRepos" : []
            });
            request(projectUrl,getRepositories.bind(this,i));
        }
    }
}
// let county = 0;
let totalRepos = 0;
function getRepositories(finalDataIdx,err,res,html) {
    if(!err) {
        // county++;
        let $ = cheerio.load(html);
        let repoLinks = $("a.text-bold");
        totalRepos += repoLinks.length > 8 ? 8 : repoLinks.length;
        for(let i = 0; i < repoLinks.length && i < 8; i++) {
            let repoName = $(repoLinks[i]).text();
            let repoUrl = "https://github.com" + $(repoLinks[i]).attr("href");
            finaldata[finalDataIdx]["gitRepos"].push({
                "repoName": repoName,
                "repoUrl": repoUrl,
                "issues": []
            });

            request("https://github.com" + $(repoLinks[i]).attr("href") + "/issues",getIssues.bind(this,finalDataIdx, i));
        }
        // if(county == 3) {
        //     fs.writeFileSync("finalGit.json", JSON.stringify(finaldata));
        // }
    }
}

let count = 0;
function getIssues(finalDataIdx,repoIdx,err,res,html) {
    if(!err) {
        count++;
        let $ = cheerio.load(html);
        let issueLinks = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        console.log("Number of issues " + issueLinks.length);
        for(let i = 0; i < issueLinks.length && i < 8; i++) {
            let issueUrl = "https://www.github.com" + $(issueLinks[i]).attr("href");
            let issueName = $(issueLinks[i]).text();
            finaldata[finalDataIdx]["gitRepos"][repoIdx]["issues"].push({
                "issueName": issueName,
                "issueUrl": issueUrl
            });
        }
        if(count == totalRepos) {
            fs.writeFileSync("finalGit.json", JSON.stringify(finaldata));
        }
    }
}

