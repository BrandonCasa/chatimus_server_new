const mongoose = require("mongoose");

async function connectMongoose() {
  await mongoose.connect("mongodb://44.194.181.255:27017/chatimus", { useNewUrlParser: true });
  console.log("Mongoose Connected.");
  return;
}

module.exports = { connectMongoose };
