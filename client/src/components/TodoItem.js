// Method 1: Code base on Class Component

// import React from "react";

// class TodoItem extends React.Component {
//     render() {
//         //const {completed, _id, title} = this.props.todo;
//         return (
//             <li className="todo-item">
//                 <input type="checkbox" 
//                        checked={this.props.todo.completed}
//                        onChange={() => this.props.onCheckBoxChange(this.props.todo._id)}
//                 />
//                 <span className={this.props.todo.completed ? "completed": null}> 
//                     {this.props.todo.title}
//                 </span>

//                 <button className="btn-style"
//                         onClick={() => this.props.onDeleteButtonClick(this.props.todo._id)}
//                 >X</button>
//             </li> 
//         ) 
//     }
// }

// export default TodoItem;

// Method 2: Code base on Functional Component

import React from "react";

function TodoItem (props) {
    return (
        <li className="todo-item">
            <input type="checkbox" 
                    checked={props.todo.completed}
                    onChange={() => props.onCheckBoxChange(props.todo._id)}
            />
            <span className={props.todo.completed ? "completed": null}> 
                {props.todo.title}
            </span>

            <button className="btn-style"
                    onClick={() => props.onDeleteButtonClick(props.todo._id)}
            >X</button>
        </li> 
    ) 
}

export default TodoItem;