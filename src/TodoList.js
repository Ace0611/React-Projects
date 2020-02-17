import React, {useEffect} from "react";
import "./App.css";

const TodoList = props => {
  useEffect(() => {
    // console.log('update')
    props.inputElement.current.focus();
  })
  return (
    <div className="todoListMain">
      {/* <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" onClick={() => deleteTodos(index)} />
          <span>{todo}</span>
        </div>
      ))}
    </div>
    <div>
      {completed.length > 0 && <h4>Completed</h4>}
      {completed.length > 0 && completed.map((c_todo, index) => (
        <div key={index}>
          <span>{c_todo}</span>
        </div>
      ))}
    </div> */}
      <div className="header">
        <form onSubmit={props.addItem}>
          <input
            type="text"
            placeholder="Task"
            ref={props.inputElement}
            value={props.currentItem.text}
            onChange={props.handleInput}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
