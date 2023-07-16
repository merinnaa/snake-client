// import net module
const net = require("net");
const { IP, PORT , PLAYER_NAME } = require("./constants");

// establishes a connection with the game server

const connect = function() {
 
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  //event handler for connection success
  conn.on("connect", () => {
    console.log("successfully connected to the game server");
    conn.write(`${PLAYER_NAME}`);
  });
  // event handler for incoming data
  conn.on("data", (data) => {
    console.log(" Message from server :", data);
  });
  
  conn.on("close", () => {
    console.log("Connection closed");
  });
  conn.on("error", (error) => {
    console.log("Error:", error);
  });
 
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// export the connect function using ES6 shorthand syntax
module.exports = { connect };