import { useState } from 'react';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
    const INITIAL_STATE = [
        { todoTask: "Walk the dog" }
    ]

    const [todos, setTodos] = useState(INITIAL_STATE);
    // a parent function that will be passed down as a prop to the boxForm so that data can be passed up to update the state and re-render
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
    }
    // this will be passed down as a prop to the Todo component
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todos.map(({ id, todoTask }) =>
                <Todo
                    key={id}
                    id={id}
                    todoTask={todoTask}
                    removeTodo={removeTodo}
                />
            )}
        </div>
    )
}

export default TodoList
