const app = require("./app");
const env = require("dotenv");
env.config();

/*app.on("secureConnection", (socket) => {
    socket.setTimeout(2 * 60 * 1000);
}).listen(process.env.PORT || 4000);*/
app.listen(process.env.PORT || 4000);
console.log("Server on port ", process.env.PORT || 4000);
