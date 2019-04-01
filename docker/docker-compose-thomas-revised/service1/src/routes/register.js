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
    // router
    //     .post('/register', async (req, res) => {
    //         console.log(req.body);
    //         const response = await axios({
    //             method: 'post',
    //             url: `http://localhost:5000/v1/user/${req.body.email}`
    //             // url: `postgres://postgres@localhost:5432/academy`
    //         });
    //         console.log(`this is the result of the response: ${response}`);
    //         //res.json(response.data);
    //         res.send('User is registered');;
    //     });
}