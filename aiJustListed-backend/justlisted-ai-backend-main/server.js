require("dotenv").config();
const http = require("http");
// const { Server } = require("socket.io");
const app = require('./app')
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);
const EventEmitter = require('events');

EventEmitter.defaultMaxListeners = 20; // or any other suitable value



server.listen(PORT, () =>
  console.log(`app running successfully listening on ${PORT}`)
);
