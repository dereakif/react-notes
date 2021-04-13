import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/TodosContext";

const TodoForm = () => {
  const [todoItem, setTodoItem] = useState("");
  const { addTodo } = useContext(TodosContext);
  const onChangeHandler = (e) => {
    setTodoItem(e.target.value);
  };
  const onSubmit = () => {
    addTodo(todoItem);
    setTodoItem("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>Todo List</h4>
      <input type="text" onChange={onChangeHandler} value={todoItem} />
      <button onClick={onSubmit}>ADD</button>
    </div>
  );
};
export default TodoForm;
