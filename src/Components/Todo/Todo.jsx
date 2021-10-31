import './Todo.css';

function Todo({title , key, id, deleteTodo, complatedTodo, isCompleted}){
   return(
     
         <li className='todo-item' key={key}>

            <p className='todo-title' style={{ textDecoration: isCompleted && 'line-through' }} >{title}</p> 

            <input className='todo-checkbox' checked={isCompleted}  type="checkbox" data-todo-id={id} onChange={complatedTodo}/>

            <button className='btn-todo' data-todo-id={id} onClick={deleteTodo}>Delete</button>
         </li>
   )
};

export default Todo;