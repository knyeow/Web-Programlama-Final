const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = 3001;

const server = express();

server.use(express.json());
server.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "admin123",
  password: "admin",
  database: "final",
});

server.listen(path, () => {
  console.log("server running on " + path);
});

server.get("/users", (req, res) => {
  const sql = "SELECT * FROM user";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

server.post("/register", (req, res) => {
  const register = [req.body.email, req.body.username, req.body.password];
  const sql = "INSERT INTO user (email,username,password) VALUES (?)";

  db.query(sql, [register], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      console.log(result);
      res.send("Success");
    }
  });
});

server.post("/login", (req, res) => {
  const login = [req.body.username, req.body.password];

  const sql = "SELECT * FROM user WHERE username = ? AND password = ?";

  db.query(sql, [login[0], login[1]], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error");
    } else if (result.length == 0) {
      res.send("Not Found");
    } else {
      res.send(result);
    }
  });
});
