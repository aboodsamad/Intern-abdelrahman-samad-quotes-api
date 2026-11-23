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

    export async function addQuote(text, author){
        const idd = quotes.length;
        const quote = {id: idd , text: text, author: author};
        quotes.push(quote);
        return quote;
    }

    export async function changeQuote(id , text){
        quotes.map(p=> p.id === id ? { ...p , text: p.text = text } : p);
        return quotes;
    }

    export async function removeQuote(id){
        const index = quotes.findIndex(p => p.id === id);
        quotes.splice(index, 1);
        return quotes;
    }