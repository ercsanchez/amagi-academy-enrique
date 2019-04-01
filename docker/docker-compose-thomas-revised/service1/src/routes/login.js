import axios from 'axios'
// promise based
import { postgres } from '../postgres';
import { retrieve } from '../model';


export function routes(router) {
    router
        // .post('/login', async (req, res) => {
        //     console.log(req.body.email);
            // const response = await axios({
            //     method: 'get',
            //     url: `http://localhost:5000/v1/user/${req.body.email}`
            //     // url: `postgres://postgres@localhost:5432/academy`
            // });
            // console.log(`result of axios call: ${JSON.stringify(response.data)}`);
            // res.json(response.data);
            // // res.send(response.data);
        // });
        .post('/login', async (req, res) => {
            const email = req.body.email;
            console.log(email);
            const results = await retrieve(postgres(req), email);
            console.log(`results of sql query: ${JSON.stringify(results[0])}`);
            res.send(results[0]);
        })
    
}


