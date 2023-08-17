// buffer is a temporary storage spot for a chunk of data that is being transferred from one place to another

const fs = require("fs");

// create readstream
const readstream = fs.createReadStream("./bigData.txt");

// read from stream
readstream.on("data", (chunk) => {
  console.log(".................");
  console.log(chunk);
});

// open stream
readstream.on("open", () => {
  console.log("opened");
});

// pause stream
setTimeout(() => {
  readstream.pause();
  console.log("paused");
}, 15);

// resume stream
setTimeout(() => {
  readstream.resume();
  console.log("resumed");
}, 2000);
