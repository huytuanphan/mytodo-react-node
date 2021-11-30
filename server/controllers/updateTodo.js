// Load Mongoose model "todos" đã tạo
const Todos = require('../models/todos'); 

// Define update todo controller for updating a todo to database
module.exports = (request, response) => { 
    // Write URL của request object đến windows console
    console.log('Request URL: ' + request.url);
    console.log('Updated ID param: ' + request.params.id);

    // Parse JSON object requested
    console.log('Updated Todo: ' + JSON.stringify(request.body, null, 2));
    //console.log('Updated Title: ' + request.body.title);
    //console.log('Updated Description: ' + request.body.description);

    // Lưu bài blog post đã update đến todos collection trong "todosdb" MongoDB
    Todos.findByIdAndUpdate(request.params.id, {
        title: request.body.title,
        description: request.body.description,
        completed: request.body.completed
    }, (result, todo) => {
        if (result == null || result.error == 0) {
            console.log('Updated successfully a todo document with id= ' + request.params.id + ' to todos collection');

            // Tìm một document vói id xác định từ todos collection trong "todosdb" MongoDB
            Todos.findById(request.params.id, (result, updatedTodo) => {
                if (result == null || result.error == 0) {
                    // Truyền dữ liệu JSON của updated todo lấy được từ database đến client
                    response.send(updatedTodo);
                }
                else {
                    console.log('Error: ', error.message);
                    // Nếu có lỗi xảy ra thì trả error code = 500 và thông tin error đến client
                    response.status(500).send(result.message);
                }
            });
        }
        else {
            console.log('Error: ', result.message);
            // Nếu có lỗi xảy ra thì trả error code = 500 và thông tin error đến client
            response.status(500).send(result.message);
        }
    });
}