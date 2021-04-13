import { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  );
};
export default TodoList;
