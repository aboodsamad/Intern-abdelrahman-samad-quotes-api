import express from "express";
import quotesRouter from "./routes/quotes.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/quotes", quotesRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route Not Found" });
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
