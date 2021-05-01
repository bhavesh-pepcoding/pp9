

function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('victory');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

let data = promise

.then(function(data) {
    console.log(data);

    return job(true);
})

.then(function(data) {
    if (data != 'victory') {
        throw 'Defeat';
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error);

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);

    return 'Error caught';
})

.then(function(data) {
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
    return "hello";
})

.catch(function(data) {
    console.log('Error:', data.message);
});

data.then(function(abc){
    console.log(abc);
});