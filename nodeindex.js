import { getAllQuotes, getQuotesById, fetchQuote } from "./quotes.js";
import { setTimeout as sleep } from "node:timers/promises";
import http from "node:http";

// console.log(getQuotesById(2));

// console.log("Quotes API starting...");

// console.log("start");
// setTimeout(() => console.log("timer"), 0);
// console.log("end");

// setTimeout(() => console.log("timer fired") , 100);
// const start = Date.now();
// while(Date.now() - start < 3000){}

// console.log("loop done");

// console.log("start");
// const quote = await fetchQuote(3);
// console.log(quote);

// try {
//   console.log("start");
//   await fetchQuote(3);
//   await fetchQuote(41);
//   console.log("here");
// } catch (err) {
//   console.log("caught : ", err.message);
// }

// console.time("parallel");
// await Promise.all([fetchQuote(3), fetchQuote(5)]);
// console.timeEnd("parallel");

// const server = http.createServer(
//   (req /* what the client send*/, res /* what you send back*/) => {
//     res.end("hello from the server");
//   },
// );

// const server = http.createServer((req, res) => {
//   console.log(req.method, req.url);
//   res.end("ok");
// });

// server.listen(3000, () => console.log("running form localhost"));

// function sendJson(res, status, data){
//   res.writeHead(status, {"content-type" : "application/json"});
//   res.send(JSON.stringfy(data));
// }

// chapter 5 

function sendJson(res, status, data) {
  res.writeHead(status, { "content-type": "application/json" });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method == "GET" && url === "/quotes") {
    return sendJson(res, 200, getAllQuotes());
  }

  if (method == "GET" && url.startsWith("/quotes/")) {
    const id = Number(url.split("/")[2]);
    try {
      const quote = getQuotesById(id);
      if (!quote) return sendJson(res, 404, { erro: "Quote not ffound" });
      return sendJson(res, 200, quote);
    } catch (error) {
      return sendJson(res, 400, { error: error.message });
    }
  }

  if (method == "POST" && url === "/quotes") {
    try {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const data = JSON.parse(Buffer.concat(chunks).toString());
      return sendJson(res, 201, data);
    } catch {
      return sendJson(res, 404, { error: "Invalid JSON" });
    }
  }

  sendJson(res, 400, { error: "Quote nott found" });
});

// server.listen(3000, () => console.log("running form localhost"));



// chpater 6 

console.log(process.env.PORT);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));