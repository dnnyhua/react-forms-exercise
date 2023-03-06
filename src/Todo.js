import { useState } from "react";
import './Todo.css'

const Todo = ({ id, todoTask, removeTodo, updateTodo }) => {

    const remove = () => removeTodo(id)

    // initial state should be current value of the todoTask
    const [editTask, setEditTask] = useState(todoTask);

    // set state for when in editing mode or not, which will give a different view
    const [isEditing, setIsEditing] = useState(false);

    // flip false to true and true to false when toggled
    const toggleEdit = () => {
        setIsEditing(edit => !edit)
    }

    // handle onChange for edit input field
    const handleChange = (e) => {
        const { value } = e.target
        setEditTask(value)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        // this is a parent function, data will pass up to update the the todo list state and re-render the todo list.
        updateTodo(id, editTask);
        setIsEditing(false);
    }


    // show different views when in editing mode vs default
    if (!isEditing) {
        return (
            <div className="Todo">
                <li>{todoTask}</li>
                <button onClick={toggleEdit}>Edit</button>
                <button onClick={remove}>X</button>
            </div>
        )
    } else {
        return (
            <div>
                <form className="Todo-EditForm" onSubmit={handleUpdate}>
                    <input type="text" value={editTask} onChange={handleChange} />
                    <button>Update</button>
                </form>
            </div>

        )
    }

}

export default Todo