
// Pattern 4: overwrite with a constructor 
function Greeter(num) {
    this.greeting = `This is object no. ${num} produced by module pattern 4.`;
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greeter;