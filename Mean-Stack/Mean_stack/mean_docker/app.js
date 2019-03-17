const express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();
const route = require("./routes/route");

mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost:27017/contactlist").then(
  () => {
    console.log("db connection done");
  },
  err => {
    console.log("db err - " + err);
  }
);
//custom port
const port = 3000;

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, "public")));
//routes for api
app.use("/api", route);

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(port);
});
