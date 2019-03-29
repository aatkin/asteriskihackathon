const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const events = JSON.parse(fs.readFileSync(path.resolve("./events.json")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/events", (req, res) => res.json(events));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
