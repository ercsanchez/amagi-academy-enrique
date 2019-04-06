import { postgres } from '../postgres';
import { insertUser } from '../model';

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            const data = req.body;
            const { first_name, address, password, email } = data;
            console.log(`SERVER input: /register route: ${JSON.stringify(data)}`);
            console.log(data.hasOwnProperty('first_name'));
            
            // STATUS CODE: 400 
            // check input: req.body
            if (typeof data !== 'object') return res.status(400).send(`Request body should be an object`);
            if (typeof data === 'null') return res.status(400).send(`Request body should not be null`);
            // no need to check undefined since already checked if it is not an object
            // if (typeof data === 'undefined') return res.status(400).send(`Request body should not be undefined`);
            
            // check individual input fields

            // there should be no spaces before and after any of the fields!!!!!!!!!!!!
            
            // check first_name field
            // spaces allowed in first_name but no spaces before and after the first_name/s
            // first_name cannot be null but can be an empty string or undefined (i.e. no name field sent in req.body)
            if (typeof first_name === 'null') return res.status(400).send(`first_name should not be null`);
            // JSON objects always require a value - this isn't necesssary since JSON format cannot accept a null value

            // check address field
            // address cannot be null but can be an empty string or undefined
            if (typeof address === 'null') return res.status(400).send(`address should should not be null`);
            // JSON objects always require a value - this isn't necesssary since JSON format cannot accept a null value
            
            // check password field
            if (!password) return res.status(400).send(`Missing password entry`);
            if (typeof password !== 'string') return res.status(400).send(`Invalid data type for password`);
            if (password.length < 6) return res.status(400).send(`Insufficient password length. Please enter at least 8 characters.`);
            // regex for password - must contain one special char, one letter, one number, and at least one letter should be capitalized

            // check email field
            if (!email) return res.status(400).json(`Missing email entry`);
            if (typeof email !== 'string') return res.status(400).send(`Invalid data type for email`);
            // regex patterns for matching valid emails

            // STATUS CODE: 200/206
            else {
                try {
                    const result = await insertUser(postgres(req), data);
                    console.log(`S2 output /register route: ${JSON.stringify(result[0])}`);
                    // add checking of data type for first_name and address
                    if (!first_name && !address) {
                        return res.status(206).send(`User is registered but first_name and address are eirther undefined or an empty string`);
                    }
                    if (!first_name) {
                    // STATUS: 206 - lacking first_name and/or address
                        return res.status(206).send(`User is registered but first_name is eirther undefined or an empty string`);
                    } 
                    if (!address) {
                        // STATUS: 206 - lacking first_name and/or address
                            return res.status(206).send(`User is registered but address is eirther undefined or an empty string`);
                    } 
                    else {
                    // STATUS: 200 - complete information
                        return res.status(200).send(`User is registered with complete information`);
                    }
                } catch(err) {
                    console.error(new Error(err));
                }
            }
        })
}


