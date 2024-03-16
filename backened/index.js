const express = require("express")
const {WebSocketServer} = require("ws")

const app = express();
app.get("/", (req, res) => {
    console.log("Home")
})

// returns the server instance
const server = app.listen(3000, ()=>{
    console.log("App started")
})

const wss = new WebSocketServer({server})
// here socket is the user that got connected
// socket means specific client ke liye webSocket connection
wss.on('connection', (socket) => {
    console.log("Someone Connected ", socket.id)

    socket.on('message', (message) => {
        console.log("message sent", message );
        socket.send("thanks buddy");
    })
})