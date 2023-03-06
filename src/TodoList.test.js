import { render, fireEvent, getByText } from "@testing-library/react";
import TodoList from "./TodoList";

// function addTodo(todoList, todoTask = "testing") {
//     const todoInput = todoList.getByLabelText("Todo");
//     fireEvent.change(todoInput, { target: { value: todoTask } });
//     const submitButton = todoList.getBytext("Add");
//     fireEvent.click(submitButton)
// }


function addTodo(todoList, task = "write tests") {
    const taskInput = todoList.getByLabelText("Todo");
    fireEvent.change(taskInput, { target: { value: task } });
    const submitButton = todoList.getByText("Add");
    fireEvent.click(submitButton);
}

it("renders without crashing", function () {
    render(<TodoList />);
});


it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});


it("can add a new todo item", function () {
    const { queryByText, getByLabelText } = render(<TodoList />);
    const input = getByLabelText("Todo");
    const addBtn = queryByText("Add");
    const editBtn = queryByText("Edit");

    expect(input).toHaveValue("")
    expect(queryByText('Walk the dog')).toBeInTheDocument();
    expect(queryByText('buy Chocolate Milk')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'buy Chocolate Milk' } });
    fireEvent.click(addBtn);

    expect(queryByText('buy Chocolate Milk')).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
    // expect(getByText("X")).toBeInTheDocument();
});