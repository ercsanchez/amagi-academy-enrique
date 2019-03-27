export function routes(router) {
    router
        .get('/user/:email', (req, res) => {
            res.json({
                name: `Enrique Sanchez`,
                address: `Makati City`,
                email: req.params.email
            })
        })
}