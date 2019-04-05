import { postgres } from '../postgres';
import { insert, retrieve } from '../model';

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            const data = req.body;
            const { name, address, password, email } = data;
            console.log(`S2 input: /register route: ${JSON.stringify(data)}`);
            
            // STATUS CODE: 400 

            // check req.body
            if (typeof data === 'null') return res.status(400).send(`Input should not be null`);
            if (typeof data !== 'object') return res.status(400).send(`Input should be an object`);
            if (typeof data === 'undefined') return res.status(400).send(`Input should not be undefined`);

            // check password field
            if (!password) return res.status(400).send(`Missing password entry`);
            if (typeof password !== 'string') return res.status(400).send(`Invalid data type for password`);
            if (password.length < 8) return res.status(400).send(`Insufficient password length. Please enter at least 8 characters.`)
            // regex for password - must contain one special char, one letter, one number, and at least one letter should be capitalized

            // check email field
            if (!email) return res.status(400).json(`Missing email entry`);
            if (typeof email !== 'string') return res.status(400).send(`Invalid data type for email`);
            // regex patterns for matching valid emails

            // STATUS CODE: 200/206
            else {
                try {
                    const id = await insert(postgres(req), data);
                    console.log(`S2 output /register route: ${JSON.stringify(id[0])}`);
                    // add checking of data type for name and address
                    if (typeof name) {
                        return res.status(206).send(`User is registered but name is invalid`);
                    }


                    if (!name || !address) {
                    // STATUS: 206 - lacking name and/or address
                        return res.status(206).send(`User is registered but with incomplete information`);
                    } else {
                    // STATUS: 200 - complete information
                        return res.status(200).send(`User is registered`);
                    }
                } catch (err) {
                    console.error(new Error(err));
                }
            }
        })
        .get('/user/:email', async(req, res) => {
            try {
                const email = req.params.email;
                console.log(`SERVICE2 input /user/:email route: ${email}`);
                const results = await retrieve(postgres(req), email);
                console.log(`SERVICE2 output /user/:email route: ${JSON.stringify(results[0])}`);
                res.status(200).send(results[0]);
            } catch (err) {
                console.error(new Error(err));
            }
        });
}

// add more status code responses for each route
// check for potential input errors
// for post requests, check db first if email is already taken; name maybe duplicated/missing but email may not
