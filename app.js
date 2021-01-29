const express = require("express");
const app = express();
const PORT = process.env.port || 3000;
const routes = require('./routes/servers.js');

app.use("/", routes)
app.use(express.static(__dirname + "/public"));

app.listen(PORT, () => {
  console.log(`[OK] Server is running. PORT: ${PORT}`)
})
