import React from 'react';

const TodoItems = (props) => {
    function createTasks(item){
        return <li key={item.key} onClick={()=>props.deleteItem(item.key)}>{item.text}</li>
    }
    const listItems = props.entries.map(createTasks);
    return (
        <ul className="theList">{listItems}</ul>
    );
}

export default TodoItems;