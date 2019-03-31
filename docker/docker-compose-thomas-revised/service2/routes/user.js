export function routes(router) {
    router
        .get('/user/:email', (req, res) => {
            res.json({
                name: `Enrique Sanchez`,
                address: `Makati City`,
                // password: ' ', not needed???
                email: req.params.email
            })
        })
}