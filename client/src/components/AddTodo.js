// Method 1: Code base on Class Component
//import React from 'react';

// class AddTodo extends React.Component {
//     state = {
//         title: ""
//     };

//     onInputChange = e => {
//         this.setState({
//             title: e.target.value
//         });
//     }

//     onAddTodo = e => {
//         e.preventDefault(); 
//         this.props.onAddTodo(this.state.title); 
//         this.setState({ 
//             title: "" 
//         });
//     }

//     render () {
//         return (
//             <form className="form-container" onSubmit={this.onAddTodo}>
//                 <input type="text" 
//                        placeholder="Add Todo..." 
//                        className="input-text" 
//                        value={this.state.title}
//                        onChange = {this.onInputChange}
//                 >
//                 </input>
//                 <input type="submit" value="Submit" className="input-submit">
//                 </input>
//             </form>
//         );
//     }
// }

// export default AddTodo;

// Method 2: Code base on Functional Component
import React, {useState} from "react";
function AddTodo (props) {

    const [title, setTitle] = useState("");
    
    const onInputChange = e => {
        setTitle(e.target.value);
    }

    const onAddTodo = e => {
        e.preventDefault(); 
        props.onAddTodo(title); 
        setTitle("");
    }

    return (
        <form className="form-container" onSubmit={onAddTodo}>
            <input type="text" 
                    placeholder="Add Todo..." 
                    className="input-text" 
                    value={title}
                    onChange = {onInputChange}
            >
            </input>
            <input type="submit" value="Submit" className="input-submit">
            </input>
        </form>
    ); 
}

export default AddTodo;