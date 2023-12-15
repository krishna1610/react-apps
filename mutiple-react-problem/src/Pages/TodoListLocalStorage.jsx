import React, { useState } from 'react';

const TodoListLocalStorage = () => {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState("");

    const handlechange = (e) => {
        setTodo(e.target.value);
    };

    const addItem = () => {
        setTodoList([...todoList, todo]);
        setTodo("");
    };


    return (<div>
        <label htmlFor="todo">Enter Item:</label>
        <input type="text" placeholder='enter item' id="todo" value={todo} onChange={handlechange}></input>
        <button onClick={addItem}>Add</button>
        <ul>
        {todoList.map((item, index)=>{
            return <li key={index}>{item} <button>Delete</button></li>
        })}
        </ul>
    </div>)
};

export default TodoListLocalStorage;