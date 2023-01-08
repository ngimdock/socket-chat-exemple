import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(
    "/home/ngimdock/Documents/projets/traveaux/express/socket-chat-exemple/index.html"
  );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
