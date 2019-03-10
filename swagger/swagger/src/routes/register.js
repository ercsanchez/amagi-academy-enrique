// register route

export function routes(router) {
    router
        .post('/register', async (req, res) => {
            res.send('User is registered.');
        })
}