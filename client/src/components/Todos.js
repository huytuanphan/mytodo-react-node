// Method 1: Code base on Class Component
// import React from "react";
// import TodoItem from "./TodoItem";

// class Todos extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.props.todos.map(todo => (
//                         <TodoItem key={todo._id} 
//                                   todo={todo} 
//                                   onCheckBoxChange={this.props.onCheckBoxChange}
//                                   onDeleteButtonClick={this.props.onDeleteButtonClick}
//                         /> 
//                     ))}
//                 </ul>
//             </div>
//         ) 
//     }
// }

//export default Todos;

// Method 2: Code base on Functional Component
import React from "react";
import TodoItem from "./TodoItem";

function Todos (props)  { 
    return (
        <div>
            <ul>
                {props.todos.map(todo => (
                    <TodoItem key={todo._id} 
                                todo={todo} 
                                onCheckBoxChange={props.onCheckBoxChange}
                                onDeleteButtonClick={props.onDeleteButtonClick}
                    /> 
                ))}
            </ul>
        </div>
    ) 
}

export default Todos;