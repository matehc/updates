import React, { useState } from 'react'
import Todos from './todos';

export default function Input() {

  const [inputVal, setInputVal] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const handleChange = (e) => {
    setInputVal(e.target.value);
    console.log(e.target.value);
  }

  const saveTodo = (e) => {
    e.preventDefault();
    const todo = {
      title: inputVal,
      completed: false
    };
    const updatedItems = todoItems;
    updatedItems.push(todo);
    setTodoItems(updatedItems);
    setInputVal('');
    console.log('todoItems', todoItems);
  }

  return (
    <>
      <form>
        <input type="text" value={inputVal} onChange={handleChange} />
        <button onClick={saveTodo}>add todo</button>
      </form>
      {todoItems.map((todo, index) => (
        <h3 key={index}>{todo.title}</h3>
      ))}
    </>
  )
}

// const todo = {
//   title: '',
//   completed: false
// }

// value =- default value