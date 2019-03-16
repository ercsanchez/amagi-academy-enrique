// 027 Exports vs. module.exports

// using exports (shorthand) instead of module.exports

exports = function() {
    console.log('I am assigning a new value to exports parameter of the wrapper function');
}

console.log(exports);  // no longer points to the same reference as module.exports; it now points to the function assigned
console.log(module.exports);  // still points to an empty object

// exports - parameter of the wrapper function

// module.exports - initially points to an empty object and is an argument passed to the wrapper function's exports parameter when require is invoked
// - exports and module.exports point to the same empty object initially after module.exports is passed as an argument to exports parameter, but when you assign another value to exports, JS reveals its quirk

// JS quirk:
// - in JS, when a variable (e.g. variable a) that holds a reference data type (e.g. obj.)  is passed to a parameter (e.g. variable b) and that parameter (b) is assigned another value (e.g. function), the parameter (b) will now point to a different spot in memory that references the function (the reference is broken); as compared to when var a is assigned another value, then both var a and var b will refer to the same value
// - in other prog. languages, assigning a different value to the parameter will also change the value of the variable being passed