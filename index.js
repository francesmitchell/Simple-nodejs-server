// import your http
const http = require("http")

// create server with HTTP
 const server = http.createServer((req, res)=> {
    console.log("server is created")
 })

// initial port
const port = 7;

// listen to server
server.listen(port, ()=> console.log(`server is running on port ${port}`))