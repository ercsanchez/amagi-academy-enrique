// import { postgres } from '../postgres';
// import { insert } from '../model';
import axios from 'axios'

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            const { name, address, password, email } = req.body;
            console.log(`SERVICE1 inputs to register route: ${JSON.stringify(req.body)}`);
            await axios({
                method: 'post',
                url: `http://localhost:5000/v1/register`,
                data: {
                    name: name,
                    address: address, 
                    password: password, 
                    email: email
                }
            });
            res.send('User is registered');
        });
}