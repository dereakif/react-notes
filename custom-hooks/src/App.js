import "./App.css";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import UserForm2 from "./components/UserForm2";

function App() {
  return (
    <div className="App">
      <UserForm />
      <Counter />
      <UserForm2 />
    </div>
  );
}

export default App;
