// login route

export function routes(router) {
    router
        .post('/login', async (req, res) => {
            res.send('User is logged in.');
        })
}