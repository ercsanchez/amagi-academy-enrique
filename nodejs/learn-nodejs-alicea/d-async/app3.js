// 049 JS Aside: Callbacks

// callback pattern
function greet(callback) {
    console.log('Start of greet function');
    const data = {
        name: 'John Doe',
    }
    callback(data);
}

greet(function(data) {
    console.log('First run of greet: callback was invoked!');
    console.log('Showing data:', data);
});

greet( (data) => console.log(`Second run of greet: different callback was invoked! Hello ${data.name}!`) );