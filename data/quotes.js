const quotes = [
  { id: 1, text: "Stay hungry, stay foolish", author: "Steve Jobs" },
  { id: 2, text: "Talk is cheap, show me the code", author: "Linus Torvalds" },
];

    export function getAllQuotes(){
        return quotes;
    }

    export function getQuotesById(id){
        return quotes.find((item) => item.id === id);
    }

    export async function addQuote(text, author){
        const id = Math.max(0, ...quotes.map(q => q.id)) + 1;
        const quote = {id: id , text: text, author: author};
        quotes.push(quote);
        return quote;
    }

    export async function changeQuote(id , text){
        const quote = quotes.find(p => p.id === id);
        if(!quote) return undefined;
        quote.text = text;
        return quote;
    }

    export async function removeQuote(id){
        const index = quotes.findIndex(p => p.id === id);
        if(index === -1) return undefined;
        return quotes.splice(index, 1);
    }