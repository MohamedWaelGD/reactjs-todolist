import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const persistLocalStorage = "Reactjs-Todolist:todos";
    const [todos, setTodo] = useState<string[]>([]);
    const [todoValue, setTodoValue] = useState<string>("");

    function handleAddTodo(todo: string) {
        const newTodos = [...todos, todo];
        setTodo(newTodos);
        persistData(newTodos);
    }

    function handleDeleteTodo(index: number) {
        const newTodos = todos.filter((e, i) => i != index);
        setTodo(newTodos);
        persistData(newTodos);
    }

    function handleEditTodo(index: number) {
        setTodoValue(todos[index]);
        handleDeleteTodo(index);
    }

    function persistData(newList: string[]) {
        localStorage.setItem(persistLocalStorage, JSON.stringify({
            todos: newList
        }));
    }

    useEffect(() => {
        if (!localStorage) return;

        let localTodos = localStorage.getItem(persistLocalStorage);
        if (!localTodos) return;

        const todos: string[] = JSON.parse(localTodos).todos;
        setTodo(todos);
    }, []);

    return (
        <>
            <TodoInput
                handleAddTodo={handleAddTodo}
                todoValue={todoValue}
                setTodoValue={setTodoValue}
            />
            <TodoList
                todo={todos}
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
            />
        </>
    );
}

export default App;
