
// Not: Bu sayfada yapacağınız her değişiklikten sonra kaydedip, Görev Yöneticisini açıp,
// çalışan node.exe'leri sonlandırın.Sonra webprog_backend> node index.js    komutu ile sunucuyu tekrar çalıştırın
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "userdb",
});
// XAMPP programını açıp server'ları başlatın.
// sonrasında http://localhost:3005/phpmyadmin/ kullanarak userdb veritabanını oluşturun
// Sizdeki port numarası farklı olabilir. 
// usertable isminde bir tablo oluşturun.
// tablo alanları: id,name,username,email,phone,website
// id alanı primary key ve auto increment olarak seçilmeli  



server.get("/", (req, res) => {
  res.json("hello");
});

server.get("/users", (req, res) => {
  const q = "SELECT * FROM usertable";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

server.get("/getuser/:id", (req, res) => {
  gelenid=req.params.id;
  const q = "SELECT `id`,`name`,`email` FROM usertable where id=?";
  db.query(q,[gelenid], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});



///////////////////////
// insert yaparken id'yi eklemiyoruz. auto increment olduğu için VT kendisi ekliyor
server.post("/newuser", (req, res) => {
  const q = "INSERT INTO usertable(`name`, `username`, `email`, `phone`, `website`) VALUES (?)"; 

  const values = [
    req.body.name,
    req.body.username,
    req.body.email,
    req.body.phone,
    req.body.website,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

////////////////////// 

server.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const q = " DELETE FROM usertable WHERE id = ? ";

  db.query(q, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

server.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const q = "UPDATE usertable SET `name`= ?, `email`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.email,
   
  ];
   // tüm values degerleri ve bookid verilen sırayla sorguya aşağıdaki syntax ile yollanır
  db.query(q, [...values,id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

server.listen(8800, () => {
  console.log("Connected to backend.");
});