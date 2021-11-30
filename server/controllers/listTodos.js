// Load Mongoose model "todos" đã tạo
const Todos = require('../models/todos'); 

// Định nghĩa controller dành cho REST API "listTodos"
module.exports = (request, response) =>{ 
    // Write URL của request object đến windows console
    console.log('Request URL: ' + request.url);

    // Tìm tất cả document từ todos collection trong "todosdb" MongoDB 
    Todos.find({
    }, (result, todos) => {
        if (result == null || result.error == 0) { 
            console.log('The following is list of todos: ');
            console.log(todos);

            // Trả danh sách Todos dạng JSON lấy được từ database đến client
            response.send(todos);
        }
        else {
            console.log('Error: ', error.message);
            // Nếu có lỗi xảy ra thì trả error code = 500 và thông tin error đến client
            response.status(500).send(result.message);
        }
    });
}
