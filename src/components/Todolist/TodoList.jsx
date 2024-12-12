import todosData from "./../../assets/todos.json";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [newValue, setNewValue] = useState("");
  const deleteTodo = (id) => {
    console.log(id);
    const newArr = todos.filter((item) => item.id !== id);
    console.log(newArr);
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const addNewTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      todo: newValue,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  return (
    <div>
      <div>
        <input value={newValue} onChange={(e) => setNewValue(e.target.value)} />
        <button onClick={addNewTodo}>Add</button>
        <ul>
          {todos.map((item) => (
            <TodoItem key={item.id} {...item} onDeleteTodo={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
