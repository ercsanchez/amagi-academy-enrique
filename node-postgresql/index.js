// Step by Step Javascript and Postgres Tutorial using node-postgres package
// https://www.youtube.com/watch?v=ufdHsFClAk0

// require pg package to use Client method/constructor
// const { Client } = require('pg');

// the same as above
const Client = require('pg').Client;

// create a client object that allows you to connect to the database
const client = new Client({
    user: "postgres",
    password: "postgres",
    port: 5432,
    database: "mydb"
});

// connect the client to the db - using promises
client.connect()
    .then( () => {
        console.log("Connected to the db successfully!");
    })
    .catch( err => console.log(err) );


// query the database using an async promise function client.query
client.query('select * from employees')
    .then( (results) => {
        console.table(results.rows);
    })
    .catch( (error) => {
        console.log(error);
    })
    .finally( () => {
            // ends the connection
            client.end();
    }); 

   