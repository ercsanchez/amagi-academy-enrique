// 019 Objects and Object Literals

let person = {
    firstName: 'Enrique',
    'lastName': 'Sanchez',
    greet() {
        console.log(`Hello, ${this.firstName} ${this.lastName}.`);
    },  // object method shorthand
};
person.greet();

console.log(person['firstName']);  // property names are quoted in strings even though they are technically variables, since they hold values

console.log(person['lastName']);