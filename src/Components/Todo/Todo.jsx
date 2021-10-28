import './Todo.css';

function Todo({title , key, id, deleteTodo, complatedTodo,}){
   return(
     
         <li className='todo-item' key={key}>
            <p className='todo-title'>{title}</p> 
            <input className='todo-checkbox' type="checkbox" onClick={complatedTodo}/>
            <button className='btn-todo' data-todo-id={id} onClick={deleteTodo}>Delete</button>
         </li>
   )
};

export default Todo;