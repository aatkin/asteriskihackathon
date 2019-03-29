const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();
const port = 3000;

const events = JSON.parse(fs.readFileSync(path.resolve('./src/events.json')));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/events", (req, res) => res.json(events));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
