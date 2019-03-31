import { postgres } from '../postgres';
import { insert } from '../model';

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            const data = req.body;
            console.log(`Check data here: ${JSON.stringify(data)}`);
            const id = await insert(postgres(req), data);
            console.log(id);
            res.send('User is registered');
        });
}