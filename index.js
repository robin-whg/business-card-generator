require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api/order", (req, res) => {
  res.send("Hello World!");
});

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, (req, res) => res.sendFile(__dirname + "/dist/index.html"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening to port ${port}`));
