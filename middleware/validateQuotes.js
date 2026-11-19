export function validateQuote(req, res, next) {
  const { text, author } = req.body;
  if (!text || !author)
    return res.status(400).json({ error: "text and author are required" });
  next();
}