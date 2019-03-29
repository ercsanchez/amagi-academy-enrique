// import { insert } from '../model';
// import { postgres } from '../postgres';
import { insert } from '../model';

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            console.log(`Check data here: ${req.body}`);
            const data = req.body;
            const id = await insert(postgres(req), req.body);
            console.log(id);
            res.send('User is registered');
        });
}