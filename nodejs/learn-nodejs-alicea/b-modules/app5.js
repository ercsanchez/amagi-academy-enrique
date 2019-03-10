// 021 By reference and by value

// pass by value
let change = (b) => { 
    return b = 2; 
};
let a = 1;
change(a);
console.log(a);
// no change since b points to a copy of variable a's value

// pass by reference
let changeObj = (d) => {
    d.prop1 = () => {};
    d.prop2 = {};
};

var c = {};
c.prop1 == {};
console.log(c);

// this changes c.prop1 from an empty object to a function expression because d and c points to the same memory location 
changeObj(c);
console.log(c);