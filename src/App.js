import './App.css';
import Input from "./components/input/Input";
import TodoLists from "./components/todoLists/TodoLists";
import CurrentUser from "./components/currentUser/currentUser";

function App() {

  return (
    <div className="App">
      <Input/>
      <TodoLists/>
      <CurrentUser/>
    </div>
  );
}

export default App;
