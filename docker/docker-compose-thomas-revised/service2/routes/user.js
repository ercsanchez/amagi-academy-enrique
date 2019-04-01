// import { postgres } from '../postgres';
// import { retrieve } from '../model';

export function routes(router) {
    // router
    //     .post('/register', async (req, res) => {
    //         const data = req.body;
    //         console.log(`Check data here: ${JSON.stringify(data)}`);
    //         const id = await insert(postgres(req), data);
    //         console.log(id);
    //         res.send('User is registered');
    // });
    router
        .get('/user/:email', async(req, res) => {
            res.json({
                // name: `enrique`,
                // address: `Makati`,
                // password: ' ', not needed???
                email: req.params.email
            });
            // const email = req.params.email;
            // console.log(email);
            // const results = await retrieve(postgres(req), email);
            // console.log(results[0]);
            // res.send(results[0]);
        });
}
