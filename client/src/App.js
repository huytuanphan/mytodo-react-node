// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// Method 1: Code base on Class Component
// import React from "react";
// import './App.css';
// import Header from "./components/layouts/Header";
// import Todos from "./components/Todos";
// import AddTodo from "./components/AddTodo";
// //import { v4 as uuidv4 } from 'uuid';
// import axios from "axios";

// class App extends React.Component {
//     state = {
//       todos: [
//       ]
//     };

//     onCompletedCheckBoxChange = _id => {
//       console.log("User clicked on completed check box with _id is " + _id);

//       // Lấy todo item hiện tại từ mảng todo đang chứa trong state "todos" dựa trên id
//       var currentTodo = this.state.todos.find(todo => todo._id === _id);

//       //console.log("currentTodo: ");
//       //console.log(currentTodo);

//       // Tạo JSON data chứa trang thái "completed" hay "uncompleted" được cập nhật trước khi send chúng nó Node.js server qua REEST API
//       const updatedTodo = { 
//         completed: !currentTodo.completed 
//       }; 

//       // Tạo PUT HTTP request để cập nhật trang thái "Completed" của một todo qua RESP API "/api/todo/_id"
//       axios.put(`/api/todo/${_id}`, updatedTodo).then (response => {
//         if (response.data.completed=== true) {
//           console.log("Trạng thái của Todo với _id " + response.data._id + " đã được update đến completed");
//         }
//         else {
//           console.log("Trạng thái của Todo với _id " + response.data._id + " đã được update đến uncompleted");
//         }

//         // Cập nhật lại trạng thái completed của todo này trong mảng todo đang chứa trong state "todos"
//         this.setState({
//           todos: this.state.todos.map(todo => {
//             if (todo._id === _id) {
//               todo.completed = !todo.completed;
//             }
//             return todo;
//           }) 
//         });
//       }); 
//     };

//     onDeleteButtonClick = _id => {
//       console.log("User clicked on Delete button to delete a todo with _id is " + _id);

//       // Tạo DELETE HTTP request để xóa một todo qua RESP API "/api/todo/"
//       axios.delete(`/api/todo/${_id}`).then (response => {
//         console.log("Đã xóa Todo với _id " + _id);
//         this.setState({
//           todos: [
//               ...this.state.todos.filter( todo => {
//               return todo._id !== _id;
//             })
//           ]
//         })
//       });
//     };

//     onAddTodo = title => {
//       console.log("User added new todo with title is '" + title + "'");
//       const newTodo = { 
//         title: title, 
//         completed: false 
//       }; 

//       // Tạo POST HTTP request để tạo todo mới qua RESP API "/api/todo"
//       axios.post("/api/todo", newTodo).then (response => {
//         console.log("Todo mới đã lưu đến database là: ");
//         console.log(response.data);

//         // Hiển thị todo mới thêm đã trả về từ REST API này lên UI
//         this.setState({ 
//           todos: [...this.state.todos, response.data] 
//         }); 
//       });
//     };

//     componentDidMount () {
//       // Tạo GET HTTP request để lấy danh sách các todo qua RESP API "/api/todos"
//       axios.get("/api/todos").then (response => {
//         console.log("Danh sách các todos đã trả về: ");
//         console.log(response.data);
//         this.setState({
//           todos: response.data
//         });
//       });
//     }

//     render(){
//         return (
//             <div className="container">
//                 <Header/>
//                 <AddTodo onAddTodo={this.onAddTodo}/>
//                 <Todos todos={this.state.todos} 
//                        onCheckBoxChange={this.onCompletedCheckBoxChange}
//                        onDeleteButtonClick={this.onDeleteButtonClick}
//                 />
//             </div>
//         );
//     }
// }

//export default App;

// Method 2: Code base on Functional Component
import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./components/layouts/Header";
//import Footer from "./components/layouts/Footer";
import Footer from "./store/containers/Footer";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
//import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

function App (props) {
    const [state, setState] = useState({
      todos: []
    });
    
    const onCompletedCheckBoxChange = _id => {
      console.log("User clicked on completed check box with _id is " + _id);

      // Lấy todo item hiện tại từ mảng todo đang chứa trong state "todos" dựa trên id
      var currentTodo = state.todos.find(todo => todo._id === _id);

      //console.log("currentTodo: ");
      //console.log(currentTodo);

      // Tạo JSON data chứa trang thái "completed" hay "uncompleted" được cập nhật trước khi send chúng nó Node.js server qua REEST API
      const updatedTodo = { 
        completed: !currentTodo.completed 
      }; 

      // Tạo PUT HTTP request để cập nhật trang thái "Completed" của một todo qua RESP API "/api/todo/_id"
      axios.put(`/api/todo/${_id}`, updatedTodo).then (response => {
        if (response.data.completed=== true) {
          console.log("Trạng thái của Todo với _id " + response.data._id + " đã được update đến completed");
        }
        else {
          console.log("Trạng thái của Todo với _id " + response.data._id + " đã được update đến uncompleted");
        }

        // Cập nhật lại trạng thái completed của todo này trong mảng todo đang chứa trong state "todos"
        setState({
          todos: state.todos.map(todo => {
            if (todo._id === _id) {
              todo.completed = !todo.completed;
            }
            return todo;
          }) 
        });
      }); 
    };

    const onDeleteButtonClick = _id => {
      console.log("User clicked on Delete button to delete a todo with _id is " + _id);

      // Tạo DELETE HTTP request để xóa một todo qua RESP API "/api/todo/"
      axios.delete(`/api/todo/${_id}`).then (response => {
        console.log("Đã xóa Todo với _id " + _id);
        setState({
          todos: [
              ...state.todos.filter( todo => {
              return todo._id !== _id;
            })
          ]
        })
      });
    };

    const onAddTodo = title => {
      console.log("User added new todo with title is '" + title + "'");
      const newTodo = { 
        title: title, 
        completed: false 
      }; 

      // Tạo POST HTTP request để tạo todo mới qua RESP API "/api/todo"
      axios.post("/api/todo", newTodo).then (response => {
        console.log("Todo mới đã lưu đến database là: ");
        console.log(response.data);

        // Hiển thị todo mới thêm đã trả về từ REST API này lên UI
        setState({ 
          todos: [...state.todos, response.data] 
        }); 
      });
    };

    useEffect(() => {
      // Tạo GET HTTP request để lấy danh sách các todo qua RESP API "/api/todos"
      axios.get("/api/todos").then (response => {
        console.log("Danh sách các todos đã trả về: ");
        console.log(response.data);
        setState({
          todos: response.data
        });
      });
    }, []);
  
    return (
        <div className="container">
            <Header/>
            <AddTodo onAddTodo={onAddTodo}/>
            <Todos todos={state.todos} 
                    onCheckBoxChange={onCompletedCheckBoxChange}
                    onDeleteButtonClick={onDeleteButtonClick}
            />
            <Footer/>
        </div>
    );
}

export default App;
