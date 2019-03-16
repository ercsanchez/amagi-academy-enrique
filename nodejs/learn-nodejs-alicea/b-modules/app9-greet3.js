// 026 Module patterns

// Pattern 3: overwrite with your own object
function Greeter() {
    this.greeting = "This is module pattern 3.";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greeter();

// or you can use ES6 class keyword, object.create or object literals to create an object