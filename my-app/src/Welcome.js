const Welcome =(props) =>{
    
    console.log('abc',props);
    return(
        <div>
        <h1>{props.name}</h1>
        <ul>
        {props.todos.map((todo,index) => {//{}-> return ()-> default
          const isComplated = todo.isComplated
          return <li key={index}>
          <span style={{color:isComplated ? 'red': 'black'}}>{todo.job}</span>
          <button onClick={() => props.editTodo(index)}>Sửa</button>
          <button onClick={() => props.removeTodo(index)}>Xóa</button>
          <input type='checkbox' 
          checked={isComplated} 
          onChange={()=>{
            props.complatedCheck(index)
          }}/>
        </li>
          
        })}
      </ul>
        </div>
    )
}

export default Welcome