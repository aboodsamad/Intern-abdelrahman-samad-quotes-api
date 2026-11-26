Quotes API

A simple REST API I built with Node.js and Express. You can get, add, edit and delete quotes. I made it to practice REST APIs, routing, controllers, CRUD operations and HTTP methods. The quotes are stored in memory, so they reset when the server restarts.

Endpoints

-GET /quotes - get all quotes
-GET /quotes/:id - get one quote
-POST /quotes - add a quote (send text and author as JSON)
-PUT /quotes/:id - update a quote (send text and author as JSON)
-DELETE /quotes/:id - delete a quote

Features

Validates hte id and the request body. Returns an error message with the right status code if the id is invalid, the text or author is missing, or the quote is not found.

Built with

Node.js and Express.

Installation

You need Node.js and npm installed. Clone the repo with git clone https://github.com/aboodsamad/Intern-abdelrahman-samad-quotes-api. Install the packages by running npm install. Create a file called .env in the root of the project and put PORT=3000 in it. Start the server by running npm run dev. Open http://localhost:3000/quotes to see the quotes. Use Postman to try POST, PUT and DELETE.
