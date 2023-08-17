// core modules -> http
const http = require("http");

// core modules -> url
const url = require("url");

// core modules -> fs
const fs = require("fs");

// create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Contact Page</h1>");
    res.end();
  }

  // can add content type for json
  else if (req.url === "/api") {
    const users = [
      { name: "Bob Smith", age: 40 },
      { name: "John Doe", age: 30 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url === "/url") {
    const address_url =
      "http://localhost:5000/contact?name=maruf&country=bangladesh";
    const parsed_url = url.parse(address_url, true);

    // get parsed url
    console.log(parsed_url);

    // get query string
    const queryObject = parsed_url.query;
    console.log(queryObject);
  } else if (req.url === "/file") {
    fs.readFile("data.txt", (err, data) => {
      if (err) {
        res.write("Error Occured");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }

  else if(req.url === "/writefile"){
    // async
    // fs.writeFile("data.txt", "Hello World", (err)=>{
    //     if(err){
    //         res.write("Error Occured");
    //         res.end();
    //     }
    //     else{
    //         res.write("File Created");
    //         res.end();
    //     }
    // })

    // sync
    const data = fs.writeFileSync("data.txt", "Hello World Sync");
    res.write("data written to file")
    res.end()
  }
});

// console.log(url)

// define port
const PORT = 5000;

// listen to port
server.listen(PORT);

console.log(`server running on port ${PORT}`);
