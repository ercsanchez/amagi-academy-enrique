import axios from 'axios'
// promise based


export function routes(router) {
    router
        .post('/login', async (req, res) => {
            const response = await axios({
                method: 'get',
                // url: `http://localhost:9000/`
                url: `postgres://postgres@localhost:5432/academy`
            });
            console.log(response);
            res.json(response.data);
        });
}


