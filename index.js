// core modules -> http
const http = require('http')

const url = require('url')

// create server
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    }
    else if (req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    else if (req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>Contact Page</h1>')
        res.end()
    }

    // can add content type for json
    else if (req.url === '/api'){
        const users = [
            {name: 'Bob Smith', age: 40},
            {name: 'John Doe', age: 30}
        ]
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(users))
        res.end()
    }

    const address_url = 'http://localhost:5000/contact?name=maruf&country=bangladesh'
    const parsed_url = url.parse(address_url, true)

    // get parsed url
    // console.log(parsed_url)

    // get query string
    const queryObject = parsed_url.query
    console.log(queryObject)
})

// console.log(url)

// define port
const PORT = 5000

// listen to port
server.listen(PORT)

console.log(`server running on port ${PORT}`)