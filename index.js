// require your server and launch it here
const server = require('./api/server');

server.listen(5000, () => {
  console.log("Running on http://localhost:5000")
})