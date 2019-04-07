export const schema = {
    create: [`CREATE TABLE users(
                id BIGSERIAL PRIMARY KEY, 
                first_name TEXT,
                address TEXT,
                password TEXT,
                email TEXT
            )`
    ],
    drop: [
        `DROP TABLE IF EXISTS users`
    ]
}
export async function insertUser(pg, data) {
    // must be able to handle undefined for name and address and convert it into string
    try {
        // console.log('what is data: ', data);
        
        // sets missing name and/or address field/s to an empty string
        console.log(data.hasOwnProperty('first_name'));
        const schemaColumns = ["first_name", "address", "password", "email"];
        schemaColumns
            .filter( (prop) => {
                return !data.hasOwnProperty(prop);
            })
            .map( (prop) => {
                data[prop] = '';
            });
        console.log(`insertUser input: (first_name, add, pword, email): ${JSON.stringify(data)}`);
        
        // query user info (first_name and address only) using email 
        const { first_name, address, password, email } = data;
        return pg.rows(
            `INSERT INTO users(first_name, address, password, email) VALUES ($1, $2, $3, $4) returning id`, first_name, address, password, email
        );
    } catch(err) {
        console.error(new Error(err));
    }
}   
export async function retrieveUser(pg, paramEmail) {
    // use tests to check output of retrieval if it gives the correct info (name, address, email) since nothing to test for the params
    // password should be private and should not be shown
    try {
        console.log(`retrieveUser - input (email): ${JSON.stringify(paramEmail)}`);
        return pg.rows(
            `SELECT first_name, address FROM users WHERE email = $1`, paramEmail
        )
    } catch(err) {
        console.error(new Error(err));
    }
}
export async function updateUser(pg, data, paramEmail) {
    try {
        // empty strings are allowed for name and address if user wants to make it empty
        // if data.property undefined, then dont update that prop; only update props with specified string values
        console.log(`updateUser - input (email): ${JSON.stringify(paramEmail)}`);

        // only update fields that have been indicated in the req.body
        const schemaColumns = ["first_name", "address", "password", "email"];
        const columnsToUpdate = schemaColumns.filter( (prop) => data.hasOwnProperty(prop) );
        const columnValuesToUpdate = columnsToUpdate.map( (prop) => data[prop] );
        console.log(...columnValuesToUpdate);
        console.log(columnsToUpdate);
        function query(cols) {
            let queryString ='';
            for (let i = 0; i < cols.length; i++) {
                if (i < cols.length - 1) {
                queryString += cols[i] + ' = $' + (i+1) + ', ';
                } else {
                queryString += ' ' + cols[i] + ' = $' + (i+1) + ' ';
                }
            }
            return `UPDATE users SET ${queryString} WHERE email = $${columnsToUpdate.length + 1}`;
        }
        // deleted: `UPDATE users SET first_name = $1, address = $2, password = $3, email = $4 WHERE email = $5`, first_name, address, password, email, paramEmail
        return pg.rows(query(columnsToUpdate), ...columnValuesToUpdate, paramEmail);

    } catch(err) {
        console.error(new Error(err));
    }
}
export async function deleteUser(pg, paramEmail) {
    try {
        console.log(`deleteUser - input (email): ${JSON.stringify(paramEmail)}`);
        return pg.rows(
            `DELETE FROM users WHERE email = $1`, paramEmail
        )
    } catch(err) {
        console.error(new Error(err));
    }
}