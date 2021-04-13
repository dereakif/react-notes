import TodoForm from "../../components/Todo/TodoForm";
import TodoList from "../../components/Todo/TodoList";
import { TodosProvider } from "../../contexts/TodosContext";

const Todo = () => {
  return (
    <TodosProvider>
      <TodoForm />
      <TodoList />
    </TodosProvider>
  );
};
export default Todo;
