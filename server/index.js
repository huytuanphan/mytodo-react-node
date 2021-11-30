const path = require('path');
const express = require('express');
const app = new express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

require('dotenv').config();

// Connect to "todosdb" MongoDB via mongoose libary
// This option "useNewUrlParser" is for avoiding current URL string parser is deprecated" warning
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true}).then(function() {
    console.log("Successfully connected to the database");    
}).catch(function(err) {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
}); 

// First Hello REST API. RESP API will response JSON data to client 
app.get('/api', (request, response) => {
    response.json({ message: 'Hello from NodeJS server!' });
});

// Define REST APIs for CRUD actions of Todo web app
// REST API for getting list of all todos
const listTodosController = require('./controllers/listTodos');
app.get('/api/todos', listTodosController); 

// REST API for adding new todo
const storeTodoController = require('./controllers/storeTodo');
app.post('/api/todo', storeTodoController); 

// REST API for getting a todo with id given
const getTodoController = require('./controllers/getTodo');
app.get('/api/todo/:id', getTodoController); 

// REST API for updating a todo with id given
const updateTodoController = require('./controllers/updateTodo');
app.put('/api/todo/:id', updateTodoController); 

// REST API for delete a todo with id given
const deleteTodoController = require('./controllers/deleteTodo');
app.delete('/api/todo/:id', deleteTodoController);

// All other GET requests not handled before will return our React app
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
  
app.listen(process.env.PORT, () => { 
    console.log('App listening on port 3001');
});


