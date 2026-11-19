import express from "express";
import { getQuotes, getQuote, createQuote } from "../controllers/quotes.controllers";
import { validateQuote } from "../middleware/validateQuotes";

const router = express.Router();
router.get("/", getQuotes);
router.get("/:id", getQuote);
router.post("/", createQuote);

export default router;
