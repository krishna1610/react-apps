import './App.css';
import SmallTask from './Pages/SmallTask.jsx';
import Form from './Pages/Form.jsx';
import { Routes, Route } from "react-router-dom";
import TodoListTask from './Pages/TodoListTask';
import Navbar from './Navbar.jsx';
import Calculator from './Pages/Calculator.jsx';
import Calender from './Pages/Calender.jsx';
import ApiIntegration from './Pages/ApiIntegration';
import TodoListLocalStorage from './Pages/TodoListLocalStorage.jsx';

function App() {  
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={ <SmallTask name={"krishna"}/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/todolist" element={<TodoListTask/>} /> 
          <Route path="/calculator" element={<Calculator/>} />
          <Route path="/calender" element={<Calender/>} />
          <Route path="/api" element={<ApiIntegration/>} />
          <Route path="todolistLocal" element={<TodoListLocalStorage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
