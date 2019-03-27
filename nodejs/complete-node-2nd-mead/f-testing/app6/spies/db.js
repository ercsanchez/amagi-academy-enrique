// 058 Test spies

// this illustrates the database

// npm module rewire - let's you swap out variables with your tests
// yarn add -D rewire


module.exports.saveUser = (user) => {
    console.log('Saving theuser', user);
};
