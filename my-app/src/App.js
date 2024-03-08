import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect} from 'react';
import ReactDOM from "react-dom";
import Welcome from './Welcome.js';


function App() {
    const [todos, setTodos] = useState([]);//Đối tượng todos
    const [job, setJob] = useState('');//Việc
    const [isComplated, setisComplated] = useState(false);
    const [indexTodos, setindexTodos] = useState(-1);
    console.log(todos);
    const addTodo = () => {
      if (job !== '') {
        if (indexTodos !== -1) {
          const newTodos = [...todos];
          newTodos[indexTodos] = {job: job, isComplated: isComplated};
          setTodos(newTodos);
          setJob('');
          setindexTodos(-1);
        } else { 
          setTodos([...todos, {job:job, isComplated:isComplated }]);
          setJob('');
        }
      }
    };
  
    const editTodo = (index) => {
      setJob(todos[index].job);
      setindexTodos(index);
    };
  
    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1)
      setTodos(newTodos);
    };

    const removeAllTodos = () => {
      setTodos([]);
    }
    const complatedCheck =(index)=>{
      const newTodos = [...todos]; 
      console.log('isComplete',newTodos[index]);
      newTodos[index].isComplated = !newTodos[index].isComplated;
      setTodos(newTodos); 
    };

    const removeDoneTodo = () => {
      const newTodos = todos.filter(todo =>!todo.isComplated);
      setTodos(newTodos);
    }
  return (
     <div className="App">
    <h1 className="todoh1">TODO INPUT </h1>
    <div className='todoInput'>
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        placeholder='Name a task!'
        
      />
    
    <div className='btn1'>
    <button 
      className='btn1'
      onClick={addTodo}>
      {indexTodos !== -1 ? 'save task' : 'add new task'}
      </button>
    </div>
    </div>
    <h1 className="todoh1">TODO OUTPUT</h1>
    <div className='todoOutput'>
    
    <Welcome todos={todos} editTodo={editTodo} removeTodo={removeTodo} complatedCheck={(index)=>{complatedCheck(index)}}/>
    </div>
    <div className='delbtn'>
    <button onClick={removeAllTodos}>Delete all todo</button>
    <button onClick={removeDoneTodo}>Delete done todo</button>
    </div>
    <div>
        
        
      
        {/* <ul>
        {todos.map((todo,index) => {//{}-> return ()-> default
          const isComplated = todo.isComplated
          return <li key={index}>
          <span style={{color:isComplated ? 'red': 'black'}}>{todo.job}</span>
          <button onClick={() => editTodo(index)}>Sửa</button>
          <button onClick={() => removeTodo(index)}>Xóa</button>
          <input type='checkbox' 
          checked={isComplated} 
          onChange={()=>{
              complatedCheck(index)
          }}/>
        </li>
          
        })}
      </ul> */}
    </div>


    
     </div>
  );
  
}

export default App;

