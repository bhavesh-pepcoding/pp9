let a = 2;

let ePromise = new Promise(function(res,rej) {
    if(a % 2 == 0) {
        res("yes! number is even");
    } else {
        rej("Oh! number is odd");
    }
});

ePromise.then(function(data) {
    console.log(data);
    console.log("hii");
}).catch(function(err) {
    console.log(err);
})