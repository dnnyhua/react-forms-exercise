import { useState } from "react"

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        todoTask: ''
    }

    const [formData, setFormData] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({ ...formData })
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoTask">Todo</label>
            <input
                id="todoTask"
                type="text"
                name="todoTask"
                placeholder="Add Todo Item"
                value={formData.todoTask}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )
}
export default NewTodoForm