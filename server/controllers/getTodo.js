// Load Mongoose model "Todos" đã tạo
const Todos = require('../models/todos'); 

// Define getTodo controller for getting a todo item with id given
module.exports = (request, response) => { 
    // Write URL của request object đến windows console
    console.log('Request URL: ' + request.url);
    console.log('Request ID param: ' + request.params.id);

    // Tìm một document vói id xác định từ todos collection trong "todosdb" MongoDB
    Todos.findById(request.params.id, (result, todo) => {
        if (result == null || result.error == 0) {
            console.log('The following is content of todo have got id:' + request.params.id);
            console.log(todo);

            // Truyền dữ liệu JSON của todo lấy được từ database đến client
            response.send(todo);
        }
        else {
            console.log('Error: ', error.message);
            // Nếu có lỗi xảy ra thì trả error code = 500 và thông tin error đến client
            response.status(500).send(result.message);
        }
    });
}