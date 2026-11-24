import express from "express";
import {
  getQuotes,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/quotes.controllers.js";
import { validateQuote } from "../middleware/validateQuotes.js";

const router = express.Router();
router.get("/", getQuotes);
router.get("/:id", getQuote);
router.post("/", validateQuote, createQuote);
router.put("/:id", updateQuote);
router.delete("/:id", deleteQuote);

export default router;
