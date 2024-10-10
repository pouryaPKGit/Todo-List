import React from "react";
import { Todo as TodoType } from "./Todos.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type TodoProps = {
  todo: TodoType;
  deleteTodo: (id: string) => boolean;
  toggleComplete: (id: string) => boolean;
};

function Todo({ todo, deleteTodo, toggleComplete }: TodoProps) {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`${todo.completed ? "completed" : ""}`} // or completed className
      >
        {todo.title}
      </p>
      <div>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
}

export default Todo;
