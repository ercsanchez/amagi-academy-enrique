import { postgres } from '../postgres';
import { retrieveUser, updateUser, deleteUser } from '../model';

export function routes(router) {
    router
        .get('/user/:email', async(req, res) => {
            try {
                const paramEmail = req.params.email;
                console.log(`SERVER input - GET /user/:email route - paramEmail: ${paramEmail}`);
                const result = await retrieveUser(postgres(req), paramEmail);
                console.log(`SERVER output - GET /user/:email route - result[0]: ${JSON.stringify(result[0])}`);

                // check output and respond accordingly -should only respond with first_name and address

                // ISSUES NOT RESOLVED: 
                // USER MUST ALSO INPUT THEIR PASSWORD TO VERIFY THEIR IDENTITY, OTHERWISE SEND STATUS CODE OF 403

                // STATUS: 404
                if (result[0] === undefined) return res.status(404).json( { "message": "User not found" } );

                // STATUS: 200
                else return res.status(200).json( { "message": "User queried", "result": result[0] } );

            } catch (err) {
                console.error(new Error(err));
            }
        })
        .put('/user/:email', async(req, res) => {
            try {
                const paramEmail = req.params.email;
                const data = req.body;
                console.log(`SERVER input - PUT /user/:email route - paramEmail: ${paramEmail}`);
                console.log(`SERVER input - PUT /user/:email route - req.body: ${JSON.stringify(data)}`);

                // ISSUES NOT RESOLVED: 
                // CHECK FIRST IF EMAIL EXISTS IN DATABASE, IF NOT RETURN STATUS CODE OF 404; CURRENTLY RETURNS STATUS OF 200 EVEN IF EMAIL IS NOT IN DB
                // CHECK FIRST IF EMAIL TO BE UPDATED WILL CONFLICT WITH AN EXISTING USER EMAIL, IF NOT RETURN STATUS CODE OF 405
                // USER MUST ALSO INPUT THEIR PASSWORD TO VERIFY THEIR IDENTITY, OTHERWISE SEND STATUS CODE OF 403

                //  STATUS: 400
                // check if object is empty
                const isEmpty = (obj) => {
                    for (let key in obj) {
                        if(obj.hasOwnProperty(key)) return false;
                    }
                    return true;
                }
                if(isEmpty(data)) return res.status(400).json( { "message": "Request body is an empty object" } );

                // check if wrong keys/properties/schema columns are indicated
                // for now, not critical since query will exclude keys that are not defined in the schema, when updating

                const result = await updateUser(postgres(req), data, paramEmail);
                console.log(`SERVER output - PUT /user/:email route - result: ${JSON.stringify(result)}`);

                // STATUS: 200
                res.status(200).json( { "message": "User info updated" } );

            } catch(err) {
                console.error(new Error(err));
            }
        })
        .delete('/user/:email', async(req, res) => {
            try {
                const paramEmail = req.params.email;
                console.log(`SERVER input - DELETE /user/:email route - paramEmail: ${paramEmail}`);

                // ISSUES NOT RESOLVED: 
                // CHECK FIRST IF EMAIL EXISTS IN DATABASE, IF NOT RETURN STATUS CODE OF 404; CURRENTLY RETURNS STATUS OF 200 EVEN IF EMAIL IS NOT IN DB
                // USER MUST ALSO INPUT THEIR PASSWORD TO VERIFY THEIR IDENTITY, OTHERWISE SEND STATUS CODE OF 403

                const result = await deleteUser(postgres(req), paramEmail);
                console.log(`SERVER output - DELETE /user/:email route - result: ${JSON.stringify(result[0])}`);

                // STATUS: 200
                res.status(200).json( { "message": "User deleted", "result": result[0] } );

            } catch(err) {
                console.error(new Error(err));
            }
        })
}

