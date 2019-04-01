import axios from 'axios'
// promise based

export function routes(router) {
    router
        .post('/login', async (req, res) => {
            console.log(`SERVICE1 inputs to login route: ${JSON.stringify(req.body.email)}`);
            const response = await axios({
                method: 'get',
                url: `http://localhost:5000/v1/user/${req.body.email}`
                // url: `postgres://postgres@localhost:5432/academy`
            });
            console.log(`SERVICE1 result of axios call: ${JSON.stringify(response.data)}`);
            // CHECK IF THIS IS CORRECT!!!!!!
            res.json(response.data);
        });  
}


