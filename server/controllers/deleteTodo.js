// Load Mongoose model "todos" đã tạo
const Todos = require('../models/todos'); 

// Define delete todo controller for deleting a todo
module.exports = (request, response) => { 
    // Write URL của request object đến windows console
    console.log('Requested URL: ' + request.url);
    console.log('Deleted ID param: ' + request.params.id);

    // Xóa một document từ todos collection trong "todosdb" MongoDB
    Todos.findByIdAndDelete(request.params.id, (result, todo) => {
        if (result == null || result.error == 0) {
            console.log('Deleted successfully a todo document with id= ' + request.params.id + ' from todos collection');
            response.json({ message: 'Deleted successfully' });
        }
        else {
            console.log('Error: ', result.message);
           // Nếu có lỗi xảy ra thì trả error code = 500 và thông tin error đến client
           response.status(500).send(result.message);
        }
    }); 
}