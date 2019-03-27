import axios from 'axios'
// promise based

export function routes(router) {
    router
        .post('/login', async (req, res) => {
            const response = await axios({
                method: 'get',
                url: `http://localhost:5000/login`
            });
            res.json(response.data);
        });
}

