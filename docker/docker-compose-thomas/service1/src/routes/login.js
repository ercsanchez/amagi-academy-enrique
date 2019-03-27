// import axios from 'axios'
// promise based

export function routes(router) {
    
    router
        .get('/user/:email', async (req, res) => {
            res.json({
                name: 'Enrique Sanchez',
                address: 'Makati',
                email: req.params.email
            });
        });
}


// module.exports = function routes(router) {
//     router
//         .get('/user/:email', async (req, res) => {
//             res.json({
//                 name: 'Enrique Sanchez',
//                 address: 'Makati',
//                 email: req.params.email
//             })
//         })
// };