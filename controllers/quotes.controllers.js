import { getAllQuotes, getQuotesById } from "../data/quotes.js";

export function getQuotes(req, res) {
  res.json(getAllQuotes());
}

export function getQuote(req, res) {
  const id = res.param.id;
  if (Number.isNaN(id)) return res.status(400).json({ error: " Invalid id" });

  const quote = getQuotesById(Number(id));
  if (!quote) return res.status(404).json({ error: "Quote Not Found" });
  return res.status(200).json(quote);
}

export function createQuote(req, res) {
  const { text, author } = req.body;
  res.status(201).json({ text, author });
}
