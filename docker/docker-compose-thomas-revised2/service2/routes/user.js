import { postgres } from '../postgres';
import { insert, retrieve } from '../model';

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            const data = req.body;
            console.log(`SERVICE2 input /register route: ${JSON.stringify(data)}`);
            const id = await insert(postgres(req), data);
            console.log(`SERVICE2 output /register route: ${JSON.stringify(id[0])}`);
            res.send('User is registered');
    })
        .get('/user/:email', async(req, res) => {
            const email = req.params.email;
            console.log(`SERVICE2 input /user/:email route: ${email}`);
            const results = await retrieve(postgres(req), email);
            console.log(`SERVICE2 output /user/:email route: ${JSON.stringify(results[0])}`);
            res.send(results[0]);
        });
}
