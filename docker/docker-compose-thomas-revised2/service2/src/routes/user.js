import { postgres } from '../postgres';
import { retrieveUser, updateUser, deleteUser } from '../model';

export function routes(router) {
    router
        .get('/user/:email', async(req, res) => {
            try {
                const paramEmail = req.params.email;
                console.log(`SERVER input: GET /user/:email route: ${paramEmail}`);
                const result = await retrieveUser(postgres(req), paramEmail);


                // check output of retrieval if it gives the correct info (name, address, email) since nothing to test for the params
                // password should be private and should not be shown
                // filter output and respond accordingly with the correct status code (e.g. 400 for user not found)

                console.log(`SERVER output: GET /user/:email route: ${JSON.stringify(result[0])}`);
                res.status(200).json(result[0]);
            } catch (err) {
                console.error(new Error(err));
            }
        })
        .put('/user/:email', async(req, res) => {
            try {
                const paramEmail = req.params.email;
                const data = req.body;
                console.log(`SERVER input: PUT /user/:email route: ${paramEmail}`);
                console.log(JSON.stringify(data));
                const result = await updateUser(postgres(req), data, paramEmail);
                console.log(`SERVER output: PUT /user/:email route: ${JSON.stringify(result)}`);
                res.status(200).json(`User info updated`);
            } catch(err) {
                console.error(new Error(err));
            }
        })
        .delete('/user/:email', async(req, res) => {
            try {
                const paramEmail = req.params.email;
                console.log(`SERVER input: DELETE /user/:email route: ${paramEmail}`);
                const result = await removeUser(postgres(req), paramEmail);
                console.log(`SERVER output: DELETE /user/:email route: ${JSON.stringify(result[0])}`);
                res.status(200).json(result[0]);
            } catch(err) {
                console.error(new Error(err));
            }
        })
}


// add more status code responses for each route
// check for potential input errors
// for post requests, check db first if email is already taken; name maybe duplicated/missing but email may not
