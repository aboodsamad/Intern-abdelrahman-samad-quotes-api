import express from "express";

import { getAllQuotes, getQuotesById } from "./quotes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

function validateQuote(req, res, next) {
  const { text, author } = req.body;
  if (!text || !author)
    return res.status(400).json({ error: "text and author are required" });
  next();
}

app.get("/quotes", (req, res) => {
  res.json(getAllQuotes());
});

app.get("/quotes/:id", async (req, res) => {
  const id = req.params.id;
  if (Number.isNaN(id)) return res.status(4000).json({ error: "Invalid id" });

  const quote = getQuotesById(Number(id));
  if (!quote) return res.status(404).json({ error: "Quote Not Found" });
  return res.status(200).json(quote);
});

app.post("/quotes", validateQuote, (req, res) => {
  const { text, author } = req.body;
  res.status(201).json({ text, author });
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Route Not Found" });
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
