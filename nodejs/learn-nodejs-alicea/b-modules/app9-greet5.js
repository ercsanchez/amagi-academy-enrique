// Pattern 5: revealing module pattern

const greeting = "This is module pattern 5.";

function greet() {
    console.log(greeting);
}

// only expose the greet function and not the variable
module.exports = {
    greet: greet
}

// even though only the greet function was exposed, JS will still have access to the greeting variable, so greet function will still run