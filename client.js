// const net = require("net");

// establishes a connection with the game server
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: '5000',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for incoming data
  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  //event handler for connection success
  conn.on("connect", () => {
    console.log("successfully connected to the game server");
    //conn.write("move: up");
    conn.write("Name: LB");
  });

  return conn;
};

// export the connect function using ES6 shorthand syntax
module.exports = { connect };