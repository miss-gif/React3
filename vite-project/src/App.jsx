import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  function addItem() {
    setTodo([...todo, inputValue]);
    console.log(setTodo);
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={addItem}>add</button>
    </>
  );
}

export default App;
