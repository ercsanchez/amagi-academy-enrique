import { postgres } from '../postgres';
import { insert, retrieve } from '../model';

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            const data = req.body;
            const { name, address, password, email } = data;
            
            console.log(`SERVICE2 input /register route: ${JSON.stringify(data)}`);
            // status: 400 
            if (typeof data === 'null') return res.status(400).send(`Input should not be null`);
            if (typeof data !== 'object') return res.status(400).send(`Input should be an object`);
            if (typeof data === 'undefined') return res.status(400).send(`Input should not be undefined`);
            if (!password) return res.status(400).send(`Missing password entry`);
            if (typeof password !== 'string') return res.status(400).send(`Invalid data type for password`);
            if (!email) return res.status(400).json(`Missing email entry`);
            if (typeof email !== 'string') return res.status(400).send(`Invalid data type for email`);
            // improvements: 
            // regex patterns for matching valid emails
            // checking password length
            // regex patterns for valid passwords (letters, number, special chars req'ts.)
            else {
            // status: 200/206
                try {
                    const id = await insert(postgres(req), data);
                    console.log(`SERVICE2 output /register route: ${JSON.stringify(id[0])}`);
                    // add checking of data type for name and address
                    if (!name || !address) {
                    // status: 206 - lacking name and or address
                        return res.status(206).send(`User is registered but with incomplete information`);
                    } else {
                    // status: 200 - complete information
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
