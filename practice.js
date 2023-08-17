const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Full Stack Development</h1>");
    res.end();
  }
//   create a new file 
  else if (req.url === "/file") {
    const data = fs.writeFileSync(
      "first.txt",
      "I am a pull stack developer !!! 🤣"
    );
    res.write("file created");
    res.end();
  }

//   read the file
  else if(req.url === "/read"){
    fs.readFile("first.txt", (err, data)=>{
        if(err){
            res.write("Error Occured");
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
  }

//   copy the file into another file
  else if (req.url === "/write"){
    const first = fs.readFileSync("first.txt");
    const second = fs.writeFileSync("second.txt", first);
    res.write("file copied");
    res.end();
  }

//   append the file
    else if (req.url === "/append"){
        const data = fs.appendFileSync("first.txt", "No! It will be full not pull ! 😑 ");
        res.write("file appended");
        res.end();
    }

    // delete the file
    else if (req.url === "/delete"){
        fs.unlink("second.txt", (err)=>{
            if(err){
                res.write("Error Occured");
                res.end();
            }
            else{
                res.write("file deleted");
                res.end();
            }
        })
    }
});

server.listen(5000);

console.log("Server is running on port 5000");
