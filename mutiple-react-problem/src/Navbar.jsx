import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
    <nav className='nav-bar-style'>
           <Link to="/" className='tab-style'>Small</Link>
           <Link to="/form" className='tab-style'>Form</Link>
           <Link to="/todolist" className='tab-style'>ToDoList</Link>
           <Link to="/calculator" className='tab-style'>Calculator</Link>
           <Link to="/calender" className='tab-style'>Calender</Link>
           <Link to="api" className='tab-style'>API</Link>
           <Link to="todolistLocal" className='tab-style'>TodoListLocal</Link>
       </nav>
    )
};

export default Navbar;