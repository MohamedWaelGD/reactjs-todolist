import React from "react";

export default function TodoCard(props: any) {
    const { children, handleDeleteTodo, handleEditTodo, index } = props;
    return (
        <li className="todoItem">
            {children}
            <div className="actionsContainer">
                <button onClick={() => handleEditTodo(index)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => handleDeleteTodo(index)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    );
}
