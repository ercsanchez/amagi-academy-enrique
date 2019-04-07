import axios from 'axios'

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            const { first_name, address, password, email } = req.body;
            console.log(`CLIENT - POST input to /register - req.body: ${JSON.stringify(req.body)}`);
            try {
                let response = await axios({
                    method: 'post',
                    url: `http://localhost:5000/v1/register`,
                    // url: `http://172.19.0.4:5000/v1/register`,
                    data: {
                        first_name,
                        address, 
                        password, 
                        email
                    }
                });
                console.log(`CLIENT - POST output of /register - response.data: ${JSON.stringify(response.data)}`);
                res.json(response.data);
            } catch (err) {
                console.error(new Error(err));
            }
            
        });
}

// ISSUES:
// DOES NOT CHECK IF EMAIL ALREADY EXISTS
// DOES NOT CHECK INPUTS
// DOES NOT CHECK OUTPUT
// DOES NOT RETURN STATUS CODES FOR CORRESPONDING RESPONSES