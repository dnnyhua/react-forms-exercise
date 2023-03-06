const Todo = ({ id, todoTask, removeTodo }) => {


    const remove = () => removeTodo(id)

    return (
        <div>
            <li>{todoTask}</li>
            <button>Edit</button>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Todo