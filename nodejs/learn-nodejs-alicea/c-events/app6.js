// 038 JS Aside: .call and .apply

const obj = {
    name: 'Enrique Sanchez',
    greet() {
        console.log(`Hello ${this.name}.`);
    }
}

obj.greet();

// any parameter passed to .call will overwrite what is pointed to by the "this" keyword of the greet method 
// changes the scope of "this" of the object
obj.greet.call( { name: 'Jane Doe'} );
// essentially borrowing the greet method and giving it another object you want them to work on

obj.greet.apply( { name: 'Jane Doe'} );