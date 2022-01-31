const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const db = mysql.createPool({
  user: "",
  host: "",
  password: "",
  database: "",
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM tasks";
  db.query(sqlSelect, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const taskDescription = req.body.taskDescription;
  const sqlInsert = "INSERT INTO tasks (taskDescription) VALUES (?)";
  db.query(sqlInsert, [taskDescription], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.put("/api/update", (req, res) => {
  const idtasks = req.body.idtasks;
  const taskDescription = req.body.taskDescription;
  const sqlUpdate = "UPDATE tasks SET taskDescription = ? WHERE idtasks = ?";
  db.query(sqlUpdate, [taskDescription, idtasks], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.delete("/api/delete/:idtasks", (req, res) => {
  const idtasks = req.params.idtasks;
  const sqlDelete = "DELETE FROM tasks WHERE idtasks = ?";
  db.query(sqlDelete, [idtasks], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001!");
});
