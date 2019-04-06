// import { postgres } from '../postgres';
// import { insert } from '../model';
import axios from 'axios'

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            const { name, address, password, email } = req.body;
            console.log(`S1 input to /register: ${JSON.stringify(req.body)}`);
            try {
                let response = await axios({
                    method: 'post',
                    url: `http://localhost:5000/v1/register`,
                    // url: `http://172.19.0.4:5000/v1/register`,
                    data: {
                        name,
                        address, 
                        password, 
                        email
                    }
                });
                console.log(response.data);
                res.send(response.data);
            } catch (err) {
                console.error(new Error(err));
            }
            
        });
}