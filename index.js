// core modules
const http = require('http')

// create server
const server = http.createServer((req, res)=>{
    res.end('Hello World')
})

// define port
const PORT = 5000

// listen to port
server.listen(PORT)

console.log(`server running on port ${PORT}`)