const express = require("express");
const cors = require("cors");
fs = require("fs");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let id = 0;
app.post("/api/order", (req, res) => {
  // fs.writeFile(`database/order-${id}.json`, req.body, function (err) {
  //   if (err) return console.log(err);
  //   console.log("Hello World > helloworld.txt");
  // });
  // id++;
  const data = req.body;
  console.log(data);
  res.send("Purchased!");
});

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, (req, res) => res.sendFile(__dirname + "/dist/index.html"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening to port ${port}`));
