//Import 'connect' module using ES6 shorthand syntax
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
//call the connect function & store the returned TCP connection object
const connection = connect();

// pass the connection object to setupInput function
setupInput(connection);