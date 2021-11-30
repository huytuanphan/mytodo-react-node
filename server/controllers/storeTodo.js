// Load Mongoose model "todos" đã tạo
const Todos = require('../models/todos'); 

// Define store todo controller for storing new todo to database
module.exports = (request, response) => { 
    // Write URL của request object đến windows console
    console.log('Request URL: ' + request.url);

    // Parse JSON object requested
    console.log('Request Todo: ' + JSON.stringify(request.body, null, 2));
    console.log('Request Title: ' + request.body.title);
    
    // Lưu todo mới đến todos collection trong "todosdb" MongoDB
    Todos.create({
        title: request.body.title, 
        description: request.body.title,
        createdBy: 'huytuanphan',
        createdDate: new Date(),
        completed: request.body.completed
    }, (result, todo) => {
        if (result == null || result.error == 0) {
            console.log('Created successfully a todo document with id= ' + todo._id + ' to todos collection');
            response.send(todo);
        }
        else {
            console.log('Error: ', result.message);
            response.send(result.message);
        }
    });
}