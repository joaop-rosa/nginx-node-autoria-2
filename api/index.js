const express = require("express");
const app = express();
const path = require("path");
const SERVER_PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/curriculo", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(SERVER_PORT, () => {
  console.log(`Servidor rodando na porta ${SERVER_PORT}`);
});
