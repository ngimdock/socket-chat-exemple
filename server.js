import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(
    "/home/ngimdock/Documents/projets/traveaux/express/socket-chat-exemple/index.html"
  );
});

io.on("connection", (socket) => {
  console.log("a user connected");
  io.emit("user connected", "another user connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on port:3000");
});
