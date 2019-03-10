const fs = require('fs');

// ASYNCHRONOUS FUNCTIONS

// CALLBACK-BASED STYLE OF ASYNCHRONOUS PROGRAMMING 
//CALLBACKS & NESTED CALLBACKS
setTimeout(() => {
    console.log("1st callback");
    setTimeout( () => {
        console.log("2nd callback");
        setTimeout( () => {
            console.log("3rd callback");
        }, 0);
    }, 50);
}, 1000);
// nested callbacks will execute in sequence even though they are async because they are sequentially queued in the task queue


// NESTED CALLBACKS
let text1 = 'hello there, we meet again!';
// asynchronous fs methods
fs.mkdir('folder-callback', (err) => {
    if (err) { throw err; }
    fs.writeFile('file-callback.txt', text1, (err) => {
        if (err) { console.error(err.message); }
        fs.readFile('file-callback.txt', (err, data) => {
            if (err) { 
                console.error(err.message); 
                throw err; 
            }
            console.log(data.toString('utf8'));
            fs.unlink('./file-callback.txt', (err) => {
                if (err) { console.log(err); }
                console.log('path/file-callback.txt was deleted');
                fs.rmdir('./folder-callback', (err) => {
                    if (err) { throw err; }
                    else { console.log('folder-callback was deleted'); }
                });
            });
        });
    });
});
// error-first callbacks - first param in any callback is the error


/*original solution
fs.mkdir('folder-callback', (err) => {
    fs.writeFile('file-callback.txt', text1, (err) => {
        fs.readFile('file-callback.txt', (err, data) => {
            console.log(data.toString('utf8'));
            fs.unlink('./file-callback.txt', (err) => {
                console.log('path/file-callback.txt was deleted');
                fs.rmdir('./folder-callback', (err) => {
                    console.log('folder-callback was deleted');
                });
            });
        });
    });
});*/


// PROMISES
// example 1
let done = false;
const isItDoneYet = new Promise(
    (resolve, reject) => {
        if (done) {
            const workDone = 'Here is the thing I built';
            resolve(workDone);
        } else {
            const why = 'Still working on something else';
            reject(why)
        }
    }
);

const checkIfItsDone = () => {
    isItDoneYet
        .then((ok) => { console.log(ok); })
        .catch((err) => {
            console.error(err)
        })
};
checkIfItsDone();

// example 2
let promise = new Promise( (resolve, reject) => {
    //setTimeout( () => resolve("done!"), 1000);
    setTimeout( () => reject(new Error("Whoops!")), 1000);
});

//executor is the function passed to new Promise
console.log(promise);
//promise.then()
//promise.then(null, console.log);
promise.catch(console.log); //same as promise.then(null, )





// convert callback example into promises

//let text2 = "Hello, is it me you're looking for.";
// fs.mkdir('folder-promise')
//     .then( (err) => { console.log("callback"); } )
//     .catch( err => console.log(err) );
//     .then(fs.writeFile('file-promise.txt.', text2))
//     .then(fs.readFile('file-promise.txt'))
//     .then( (err, data) => { console.log(data.toString('utf8')); });

