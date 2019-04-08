import { postgres } from '../postgres';
import { insertUser } from '../model';

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            const data = req.body;
            const { first_name, address, password, email } = data;
            console.log(`SERVER input - POST /register route - req.body: ${JSON.stringify(data)}`);
            
            // STATUS CODE: 400 
            // check input: req.body
            if (typeof data !== 'object') return res.status(400).json( { "message": "Request body should be an object" } );
            if (typeof data === 'null') return res.status(400).json( { "message": "Request body should not be null" } );
            // no need to check undefined since already checked if it is not an object
            // if (typeof data === 'undefined') return res.status(400).send(`Request body should not be undefined`);

            // check if input - req.body is an empty object
            const isEmpty = (obj) => {
                for (let key in obj) {
                    if(obj.hasOwnProperty(key)) return false;
                }
                return true;
            }
            if(isEmpty(data)) return res.status(400).json( { "message": "Request body is an empty object" } );
            
            // check individual input fields

            // there should be no spaces before and after any of the fields!!!!!!!!!!!!
            
            // check first_name field
            // spaces allowed in first_name but no spaces before and after the first_name/s
            // first_name cannot be null but can be an empty string or undefined (i.e. no name field sent in req.body)
            if (typeof first_name === 'null') return res.status(400).json( { "message": "first_name should not be null" } );
            // JSON objects always require a value - this isn't necesssary since JSON format cannot accept a null value

            // check address field
            // address cannot be null but can be an empty string or undefined
            if (typeof address === 'null') return res.status(400).json( { "message": "address should should not be null" } );
            // JSON objects always require a value - this isn't necesssary since JSON format cannot accept a null value
            
            // check if missing password and email fields
            if (!password && !email) return res.status(400).json( {"message": "Missing password and email entries" } );

            // check password field
            if (!password) return res.status(400).json( { "message": "Missing password entry" } );
            if (typeof password !== 'string') return res.status(400).json( { "message": "Invalid data type for password" } );
            if (password.length < 6) return res.status(400).json( { "message": "Insufficient password length. Please enter at least 6 characters." } );
            // regex for password - must contain one special char, one letter, one number, and at least one letter should be capitalized

            // check email field
            if (!email) return res.status(400).json(`Missing email entry`);
            if (typeof email !== 'string') return res.status(400).json( { "message": "Invalid data type for email" } );
            // regex patterns for matching valid emails

            // STATUS CODE: 200
            else {
                try {
                    const result = await insertUser(postgres(req), data);
                    console.log(`SERVER output - POST /register route - req.body: ${JSON.stringify(result[0])}`);
                    // add checking of data type for first_name and address
                    if (!first_name && !address) {
                        return res.status(200).json( { "message": "User is registered but first_name and address are either undefined or an empty string", "result": result[0] } );
                    }
                    if (!first_name) {
                    // STATUS: 206 - lacking first_name and/or address
                        return res.status(200).json( { "message": "User is registered but first_name is either undefined or an empty string", "result": result[0] } );
                    } 
                    if (!address) {
                        // STATUS: 206 - lacking first_name and/or address
                            return res.status(200).json( { "message": "User is registered but address is either undefined or an empty string", "result": result[0] } );
                    } 
                    else {
                    // STATUS: 200 - complete information
                        return res.status(200).json( {"message":"User is registered with complete information","result":result[0]} );
                    }
                } catch(err) {
                    console.error(new Error(err));
                }
            }
        })
}

// ISSUES NOT RESOLVED: 
// CAN'T HANDLE ADDITIONAL FIELDS WHICH ARE NOT SPECIFIED BY THE SCHEMA THAT HAVE BEEN SENT BY THE CLIENT 
// for post requests, check db first if email is already taken; name maybe duplicated/missing but email may not
