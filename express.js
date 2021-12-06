const express = require("express");
const http = require("http");

const apiPort = 3000;

async function startApp() {
  const app = express();

  var httpServer = http.createServer(app);
  httpServer.listen(apiPort + 1, "0.0.0.0", () => console.log(`HTTP server running on port ${apiPort}`));
  return { app, httpServer };
}

module.exports = { startApp };
