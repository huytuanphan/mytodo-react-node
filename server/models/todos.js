const mongoose = require('mongoose');

// Tạo một schema của Todo model tương ứng với "todos" collection trong monggodb
// Khái niệm collection trong monggodb là giống như một table trong mysql, sqlserver hay oracle 
const Schema = mongoose.Schema;
const TodosSchema = new Schema({
    title: String,
    description: String,
    createdBy: String,
    createdDate: Date,
    completed: Boolean
}); 

// Kết nối đến mongodb và tạo một model tương ứng với "todos" collection trong mongodb qua schema đã tạo ở trên
const Todos = mongoose.model('todos', TodosSchema);

// Export "Todos" model để các class khác có thể dùng lại sau đó
module.exports = Todos;
