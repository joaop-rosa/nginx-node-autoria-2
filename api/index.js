const express = require("express");
const app = express();
const path = require("path");
const SERVER_PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  const paginaPath = path.join(__dirname, "index.html");
  res.sendFile(paginaPath);
});

app.listen(SERVER_PORT, () => {
  console.log(`Servidor rodando na porta ${SERVER_PORT}`);
});
