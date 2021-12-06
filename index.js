const mongooseHandler = require("./mongoose/mongoose");
const expressApp = require("./express/express");

let app;
let httpServer;

async function start() {
  await mongooseHandler.connectMongoose();
  let expressAppResults = await expressApp.startApp();
  app = expressAppResults.app;
  httpServer = expressAppResults.httpServer;
}

start();
