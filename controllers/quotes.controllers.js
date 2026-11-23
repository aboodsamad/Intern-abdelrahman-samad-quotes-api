import { getAllQuotes, getQuotesById, addQuote, changeQuote, removeQuote} from "../data/quotes.js";

export function getQuotes(req, res) {
  res.json(getAllQuotes());
}

export function getQuote(req, res) {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: " Invalid id" });

  const quote = getQuotesById(Number(id));
  if (!quote) return res.status(404).json({ error: "Quote Not Found" });
  return res.status(200).json(quote);
}

export async function createQuote(req, res) {
  const {text, author} = req.body;
  const quote = await addQuote(text, author);
  return res.status(201).json({quote});
}

export async function updateQuote(req , res){
  const id = Number(req.params.id);
  const text = req.body?.text;
  const quotes = await changeQuote(id, text);
  return res.status(200).json({quotes});
}

export async function deleteQuote(req, res){
  const id = Number(req.params.id);
  const quotes = await removeQuote(id);
  return res.status(201).json({quotes}); 

}