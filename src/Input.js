import React from "react";
import InputState from './InputState';

const Input = ({saveTodo}) => {
  const { value, reset, onChange } = InputState('');
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        reset();
    }}>
      <input type="text" onChange={onChange} value={value}/>
    </form>
  );
};

export default Input;
