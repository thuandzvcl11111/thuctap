import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([]);//Chuỗi todos
    const [job, setJob] = useState('');//Việc
    const [editTodos, setEditTodos] = useState(-1);
  
    const addTodo = () => {
      if (job !== '') {
        if (editTodos !== -1) {
          const newTodos = [...todos];
          newTodos[editTodos] = job;
          setTodos(newTodos);
          setJob('');
          setEditTodos(-1);
        } else {
          setTodos([...todos, job]);
          setJob('');
        }
      }
    };
  
    const editTodo = (index) => {
      setJob(todos[index]);
      setEditTodos(index);
    };
  
    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  return (
     <div className="App">
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button onClick={addTodo}>{editTodos !== -1 ? 'Lưu' : 'Thêm'}</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => editTodo(index)}>Sửa</button>
              <button onClick={() => removeTodo(index)}>Xóa</button>
            </li>
          ))}
        </ul>
    </div>
     </div>
  );
}

export default App;

