
export function routes(router) {
    router
        .post('/register', async (req, res) => {
            res.send('User is registered');
        });
}

// module.exports = function routes(router) {
//     router
//         .post('/register', async (req, res) => {
//             res.send('User is registered')
//         })
// };