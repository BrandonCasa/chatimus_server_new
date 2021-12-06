const mongooseHandler = require("./mongoose");
const expressApp = require("./express");

let app;
let httpServer;

async function start() {
  await mongooseHandler.connectMongoose();
  let expressAppResults = await expressApp.startApp();
  app = expressAppResults.app;
  httpServer = expressAppResults.httpServer;
}

start();
