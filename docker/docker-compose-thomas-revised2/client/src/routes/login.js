import axios from 'axios'
// promise based

export function routes(router) {
    router
        .post('/login', async (req, res) => {
            try {
                console.log(`CLIENT - POST input to /login - req.body.email: ${JSON.stringify(req.body.email)}`);
                const response = await axios({
                    method: 'get',
                    url: `http://localhost:5000/v1/user/${req.body.email}`
                    // url: `http://172.19.0.4:5000/v1/user/${req.body.email}`
                });
                console.log(`CLIENT - POST output of /login - response.data: ${JSON.stringify(response.data)}`);
                res.json(response.data);
            } catch (err) {
                console.error(new Error(err));
            }
        });  
}


// ISSUES:
// DOES NOT CHECK INPUTS (password)
// DOES NOT CHECK OUTPUT 
// DOES NOT RETURN STATUS CODES FOR CORRESPONDING RESPONSES