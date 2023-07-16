//Import the constant and message
const { SAY_MESSAGES, MOVE_KEY } = require("./constants");
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }

  if (key === "w") {
    connection.write(MOVE_KEY[key]);
  }
  if (key === "a") {
    connection.write(MOVE_KEY[key]);
  }
  if (key === "s") {
    connection.write(MOVE_KEY[key]);
  }
  if (key === "d") {
    connection.write(MOVE_KEY[key]);
  }

  if (key === "1") {
    connection.write(SAY_MESSAGES.x);
  }
  if (key === "2") {
    connection.write(SAY_MESSAGES.y);
  }
  if (key === "3") {
    connection.write(SAY_MESSAGES.z);
  }
 
};
//setupInput();
module.exports = { setupInput };