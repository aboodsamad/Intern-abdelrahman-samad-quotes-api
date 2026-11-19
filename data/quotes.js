import { text } from "node:stream/consumers";
import { setTimeout as sleep } from "node:timers/promises";

const quotes = [
  { id: 1, text: "Stay hungry, stay foolish", author: "Steve Jobs" },
  { id: 2, text: "Talk is cheap, show me the code", author: "Linus Torvalds" },
];

export function getAllQuotes(){
    return quotes;
}

export function getQuotesById(id){
    if(id > 99) throw new Error("404");
    return quotes.find((item) => item.id === id);
}
