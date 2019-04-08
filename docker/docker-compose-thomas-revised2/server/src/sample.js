console.log('hello');

const data1 = ["a", "b", "c", "d"]


const schemaColumns = ["first_name", "address", "password", "email"];
        //const columnsToUpdate = schemaColumns.filter( (prop) => data.hasOwnProperty(prop) );
        //const columnValuesToUpdate = schemaColumns.map( (prop) => data[prop] );

        //const { first_name, address, password, email } = data;


        // function queryString(columns, ...columnValues) {
        //     const query = 'UPDATE users SET ';
        //     // for (let i = 0; i < columns.length; i++) {

        //     // }
        //     columns.map( (col, index) => col + ' = $' + (index + 1) + ', ' );
        // }

        // const query = schemaColumns.map( (col, index) => col + ' = $' + (index + 1) + ', ' );
        // let query ='';
        // for (let i = 0; i < schemaColumns.length; i++) {
        //     if (i < schemaColumns.length - 1) {
        //         query += schemaColumns[i] + ' = $' + (i+1) + ', ';
        //     } else {
        //         query += ' ' + schemaColumns[i] + ' = $' + (i+1) + ' ';
        //     }
        // }
        // console.log(`UPDATE users SET ${query} WHERE email = $${schemaColumns.length + 1}`, [...data1]);


        // console.log(...schemaColumns);
        // console.log('UPDATE users SET ' + schemaColumns);
        
        const data = {
            first_name: "rick",
            address: "makati",

            email: "enrique@gmail.com"
        };
        const columnsToUpdate = schemaColumns.filter( (prop) => data.hasOwnProperty(prop) );
        console.log(columnsToUpdate);
        const columnValuesToUpdate = columnsToUpdate.map( (prop) => data[prop] );
        console.log(columnValuesToUpdate);
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
            console.log(`UPDATE users SET ${queryString} WHERE email = $${columnsToUpdate.length + 1}`);
            return `UPDATE users SET ${queryString} WHERE email = $${columnsToUpdate.length + 1}`;
        }
        console.log(query(columnsToUpdate));
        // return pg.rows(
        //     // `UPDATE users SET first_name = $1, address = $2, password = $3, email = $4 WHERE email = $5`, first_name, address, password, email, paramEmail
            
        //     query(columnsToUpdate), ...columnValuesToUpdate
        // )