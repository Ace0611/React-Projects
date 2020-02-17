import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Input from "./Input";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: "", key: "" });
  const myInput = useRef();

  useEffect(() => myInput.current && myInput.current.focus(), []);

  const addItem = e => {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== "") {
      console.log(newItem);
      const totalItems = [...items, newItem];
      setItems(totalItems);
      setCurrentItem({ text: "", key: "" });
    }
  };

  const deleteItem = key => {
    const filteredItems = items.filter(item => {
      return item.key !== key
    })
    setItems(filteredItems);
  }

  const handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    setCurrentItem(currentItem);
  };
  // const [todos, setTodos] = useState(
  //   JSON.parse(localStorage.getItem("todo")) || []
  // );
  // const [completed, setCompleted] = useState(
  //   JSON.parse(localStorage.getItem("completed")) || []
  // );
  // useEffect(() => {
  //   window.localStorage.setItem("todo", JSON.stringify(todos));
  //   window.localStorage.setItem("completed", JSON.stringify(completed));
  //   return () => {
  //   };
  // }, [todos, completed]);

  return (
    <div className="App">
      {/* <header className="App-header">Todo App</header>
      <Input
        saveTodo={todoText => {
          setTodos([...todos, todoText]);
        }}
      />
      <TodoList
        todos={todos}
        completed={completed}
        deleteTodos={todoIndex => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);
          const completedTodos = todos.filter(
            (_, index) => index === todoIndex
          );
          setCompleted([].concat(...completed, completedTodos));
          setTodos(newTodos);
        }}
      /> */}
      <TodoList
        addItem={addItem}
        inputElement={myInput}
        handleInput={handleInput}
        currentItem={currentItem}
      />
      <TodoItems entries={items} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
