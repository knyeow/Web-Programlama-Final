//index.js değiştirildiğinde tekrar >node index.js ile çalıştırılması gerekir.

// express kütüphanesi import edilir
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// server'ı oluşturuyoruz
const server = express();

server.use(express.json());
server.use(cors());

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "register",
});

// post iki parametre alıyor: Birincisi hangi adrese cevap vermek istiyoruz onu yazıyoruz.
// ikincisi ise req ve res alan bir arrow function.
// req, gelen istekle ilgili bilgi içerir
// res ise server'ın yollayacağı cevap ile ilgili bilgi içerir.
server.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  con.query(
    "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
    [email, username, password],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "ENTER CORRECT ASKED DETAILS!" });
      }
    }
  );
});

server.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  con.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        console.log("hata var");
        req.setEncoding({ err: err });
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "WRONG USERNAME OR PASSWORD!" });
        }
      }
    }
  );
});

// listen iki parametre alır. Birincisi dinleyeceğimiz portu,
// ikincisi dinleme olduğunda çalışacak arrow fonk.
server.listen(3001, () => {
  console.log("running backend server");
});
