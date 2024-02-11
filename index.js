require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
app.use(cors());

const connection = mysql.createConnection(process.env.DATABASE_URL);

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});

app.get("/food", (req, res) => {
  connection.query("select * from tbl_food", function (err, results, fields) {
    res.send(results);
  });
});

app.listen(process.env.PORT || 3000);
