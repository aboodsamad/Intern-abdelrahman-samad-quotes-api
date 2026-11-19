import express from "express";
import { getQuotes, getQuote, createQuote } from "../controllers/quotes.controllers.js";
import { validateQuote } from "../middleware/validateQuotes.js";

const router = express.Router();
router.get("/", getQuotes);
router.get("/:id", getQuote);
router.post("/", validateQuote, createQuote);

export default router;
