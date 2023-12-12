// Import necessary modules
const express = require('express');
const app = express(); // Initialize Express app
const port = 4000; // Define port
const cors = require('cors'); // Import CORS for cross-origin resource sharing

// Import  modules
const path = require('path'); // Module for handling file paths
const express = require('express'); // Express framework for Node.js


// Enable CORS middleware
app.use(cors());

// Configure headers for CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Specify allowed methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // Define allowed headers
  next();
});

// Import and configure body-parser for handling request data
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import and connect to MongoDB using Mongoose
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@martinscluster.w5rtkz0.mongodb.net/DB14?retryWrites=true&w=majority');
}

// Define a schema for books
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});

// Create a model based on the book schema
const bookModel = mongoose.model('my_books', bookSchema);

// Define DELETE endpoint to delete a book by ID
app.delete('/api/book/:id', async (req, res) => {
  console.log("Delete: " + req.params.id);
  let book = await bookModel.findByIdAndDelete(req.params.id); // Find and delete book by ID
  res.send(book); // Send deleted book data in response
});

// Define PUT endpoint to update a book by ID
app.put('/api/book/:id', async (req, res) => {
  console.log("Update: " + req.params.id);
  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Find and update book by ID
  res.send(book); // Send updated book data in response
});

// Define POST endpoint to create a new book
app.post('/api/book', (req, res) => {
  console.log(req.body);
  // Create a new book based on request body data
  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author
  })
    .then(() => { res.send("Book Created"); }) // Send success message if book is created
    .catch(() => { res.send("Book NOT Created"); }); // Send error message if book creation fails
});

// Define root route
app.get('/', (req, res) => {
  res.send('Hello World!'); // Send 'Hello World!' for root route
});

// Define GET endpoint to fetch all books
app.get('/api/books', async (req, res) => {
  let books = await bookModel.find({}); // Find all books in the database
  res.json(books); // Send fetched books in JSON format
});

// Define GET endpoint to fetch a book by its ID
app.get('/api/book/:identifier', async (req, res) => {
  console.log(req.params.identifier);
  let book = await bookModel.findById(req.params.identifier); // Find book by ID
  res.send(book); // Send fetched book data in response
});

// Handling a wildcard route ('*') for GET requests
app.get('*', (req, res) => {
  // Sending the 'index.html' file located in the '../build' directory as a response
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

// Start the server on specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
