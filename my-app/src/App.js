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
    const [showAllTodos, setshowAllTodos] = useState([])
    const [showDoneTodo, setshowDoneTodo] = useState([])
    const [showTodo, setshowTodo] = useState([])
    // console.log(todos);
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
    useEffect(()=>{
      setshowAllTodos([todos])
      setshowTodo(todos.filter(todo =>todo.isComplated === false))
      setshowDoneTodo(todos.filter(todo => todo.isComplated === true)) 
    },[todos])
    console.log('thuan',[todos]);


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
    <div className='filter-btn'>
      <button 
      onClick={()=>{
        setTodos(showAllTodos)
      }}>All</button>
      <button onClick={()=>{
        setTodos(showDoneTodo)
      }}>Done</button>
      <button onClick={()=>{
        setTodos(showTodo)
      }}
      >Todo</button>
    </div>
    <div className='todoOutput'>
    
    
    <Welcome todos={todos} editTodo={editTodo} removeTodo={removeTodo} complatedCheck={(index)=>{complatedCheck(index)}}/>
    </div>
    <div className='delbtn'>
    <button onClick={removeAllTodos}>Delete all task</button>
    <button onClick={removeDoneTodo}>Delete done task</button>
    </div>
    <div>
    </div>


    
     </div>
  );

  
  
}

export default App;

