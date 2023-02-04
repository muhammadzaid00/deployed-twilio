require("@babel/register");
require("regenerator-runtime/runtime");

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit();
});
module.exports = require("./app");
