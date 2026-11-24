import {
  getAllQuotes,
  getQuotesById,
  addQuote,
  changeQuote,
  removeQuote,
} from "../services/quotes.service.js";

import { checkId } from "../middleware/validateId.js";

export function getQuotes(req, res) {
  res.json(getAllQuotes());
}

export function getQuote(req, res) {
  const id = checkId(req);
  const quote = getQuotesById(Number(id));
  if (!quote) return res.status(404).json({ error: "Quote Not Found" });
  return res.status(200).json(quote);
}

export async function createQuote(req, res) {
  const { text, author } = req.body;
  const quote = await addQuote(text, author);
  return res.status(201).json({ quote });
}

export async function updateQuote(req, res) {
  const id = checkId(req);
  const text = req.body?.text;
  const quotes = await changeQuote(id, text);
  if (!quotes) return res.status(404).json("quote not found");
  return res.status(200).json({ quotes });
}

export async function deleteQuote(req, res) {
  const id = checkId(req);
  const quotes = await removeQuote(id);
  if (!quotes) return res.status(404).json({ error: "quote not find" });
  return res.status(204).send();
}
