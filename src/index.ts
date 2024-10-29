import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const PROD = process.env.PRODUCTION || false;

app.get("/", (req, res) => {
  res.send("Welcome to the official Elektronik API");
});

app.listen(PORT, () => {
  if (!PROD) console.log(`Server started at http://localhost:${PORT}`);
});
