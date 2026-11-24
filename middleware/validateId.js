export function checkId(req) {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ error: " Invalid id" });
  return id;
}
