const path = require("path");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//
const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

const port = process.env.port || 5000;

//socket connected

io.on("connection", () => {
  console.log(`socket connected!!`);
});

//listen server

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
