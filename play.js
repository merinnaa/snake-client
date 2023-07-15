const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541"
  });

  conn.setEncoding("utf8");

  let lastDataReceivedTime = Date.now();
  const idleTime = 60000;

  conn.on('data', (data) => {
    console.log(data, "data");
    console.log("Successfully connected to game server");
    // Function to check and handle idle time
    const checkIdleTime = function() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastDataReceivedTime;

      if (elapsedTime >= idleTime) {
        console.log("you ded cuz you idled");
      }
    };
 

    // Set an interval to periodically check for idle time
    setInterval(checkIdleTime, 1000); // Check every second
  });
  return conn;
};

console.log("connecting ...");
connect();