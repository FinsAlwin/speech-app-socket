const app = require("express")();
// const server = require("http").Server(app);
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("chatNotications", chatNotications);
  socket.on("firework", firework);
  // socket.emit("chat", chat);
});

function firework(data) {
  io.emit("firework", data);
}

function chat() {
  const payload = { alwin: "alwin" };
  return payload;
}

function chatNotications(data) {
  io.emit("notification", data);
}

httpServer.listen(8000);
// io.listen(process.env.PORT || 8000);
// WARNING !!! app.listen(3000); will not work here, as it creates a new HTTP server
