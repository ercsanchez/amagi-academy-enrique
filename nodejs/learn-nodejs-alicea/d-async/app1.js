
// example of promise
let amount = 1500;
let sleep = new Promise( (resolve, reject) => {
    if (amount<=500) {
        return reject('You slept to quick.');
    } else {
        setTimeout( () => resolve(`Slept for ${amount}.`), amount);
    }
});
function getSleep() {
    return sleep;
}
getSleep().then((result) => console.log(result));

// better example with error
function sleep2(time) {
    return new Promise( (resolve, reject) => {
        if (time <= 500) {
            return reject(new Error(`You slept too short`));
        } else {
            // setTimeout( () => { return resolve(`Slept for ${time}.`) }, time ); 
            setTimeout( () => resolve(`Slept for ${time}.`), time);
        }
    });
}
sleep2(500).then( (result) => console.log(result) ).catch( (err) => console.log(err.message) );