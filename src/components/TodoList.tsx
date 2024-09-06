import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props: any) {
    const { todo } = props;
    return (
        <ul className="main">
            {todo.map((todo: string, todoIndex: number) => {
                return (
                  <TodoCard {...props} key={todoIndex} index={todoIndex}>
                    <p>{todo}</p>
                  </TodoCard>
                );
            })}
        </ul>
    );
}
