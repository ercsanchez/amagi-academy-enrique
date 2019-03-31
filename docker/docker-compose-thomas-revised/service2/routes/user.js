export function routes(router) {
    router
        .get('/user/:email', (req, res) => {
            
            
            res.json({
                name: `enrique`,
                address: `Makati`,
                // password: ' ', not needed???
                email: req.params.email
            })
        })
}