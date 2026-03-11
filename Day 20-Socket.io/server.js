import app from "./src/app.js"
import { createServer } from "http";
import { Server } from "socket.io";


const httpServer = createServer(app);
const io = new Server(httpServer);

// io = server
// socket = client
// on = listen the event
// emit = fire the event

io.on("connection", (socket) => {
    console.log("New user connected");
    socket.on("message",(msg) => {
        console.log("User listen message event...")
        console.log(msg)
        io.emit("abc")
    })
})

httpServer.listen(3000, () => {
    console.log("Server is running on port 3000")
})

/* DOCS
    socket.emit()
    socket.broadcast().emit()
    io.emit()
*/