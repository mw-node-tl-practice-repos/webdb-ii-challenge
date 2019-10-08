const server = require('./server')

const port = 8000

server.get('/', (req, res) => {
    res.status(200).json({message: "Server is live!"})
})

server.listen(port, () => {
    console.log(`=== Server listening on port ${port} ===`)
})