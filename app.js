const express = require("express");
const app = express();
const PORT = process.env.port || 3000;
const routes = require('./routes/servers.js');

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.use("/", routes)
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/dist"));

app.listen(PORT, () => {
  console.log(`[OK] Server is running. PORT: ${PORT}`)
})
