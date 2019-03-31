import axios from 'axios'
// promise based


export function routes(router) {
    router
        .post('/login', async (req, res) => {
            const response = await axios({
                method: 'get',
                url: `http://localhost:5000/v1/user/${req.body.email}`
                // url: `postgres://postgres@localhost:5432/academy`
            });
            
            res.json(response.data);
        });
}


