const TodoItem = ({ id, completed, todo, onDeleteTodo }) => {
  return (
    <li>
      <input type="chekbox" />
      <span>{todo}</span>
      <button onClick={() => onDeleteTodo(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
