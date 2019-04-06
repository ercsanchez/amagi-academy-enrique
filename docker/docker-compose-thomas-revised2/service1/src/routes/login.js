import axios from 'axios'
// promise based

export function routes(router) {
    router
        .post('/login', async (req, res) => {
            try {
                console.log(`S1 input to /login: ${JSON.stringify(req.body.email)}`);
                const response = await axios({
                    method: 'get',
                    url: `http://localhost:5000/v1/user/${req.body.email}`
                    // url: `http://172.19.0.4:5000/v1/user/${req.body.email}`
                });
                console.log(`S1 output of /login: ${JSON.stringify(response.data)}`);
                // CHECK IF THIS IS CORRECT!!!!!!
                res.json(response.data);
            } catch (err) {
                console.error(new Error(err));
            }
        });  
}


