import React from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';
import Main from './Components/Main/Main';

function App() {
	const [todo, setTodo] = React.useState(
		JSON.parse(window.localStorage.getItem('todos')) || [],
	);

	const complatedTodo = (evt) => {
		const todoId = evt.target.dataset.todoId - 0;

		const foundTodo = todo.find((row) => row.id === todoId);

		foundTodo.isComplete = !foundTodo.isComplete;

		setTodo([...todo]);
		window.localStorage.setItem('todos', JSON.stringify([...todo]));
	};

	const deleteTodo = (evt) => {
		const todoId = evt.target.dataset.todoId - 0;

		const filteredTodos = todo.filter((row) => row.id !== todoId);

		setTodo([...filteredTodos]);

		window.localStorage.setItem('todos', JSON.stringify([...filteredTodos]));
	};

	const complated = todo.filter((row) => row.isComplete === true).length;


	// const renderAll = (evt) => 

	// 	setTodo([...todo]);
	// };

	const renderActive = (evt) => {
		const filterTodo = todo.filter((row) => row.isComplete !== true);

		setTodo([...filterTodo]);
	};


	const renderCompleted = (evt) => {
		const filterTodo = todo.filter((row) => row.isComplete === true);

		setTodo([...filterTodo]);
	};

	return (
		<>
			<div className='container'>
				<Main />

				<input
					className='todo-input'
					onKeyUp={(evt) => {
						if (evt.code === 'Enter') {
							const newtodo = {
								id: todo[todo.length - 1]?.id + 1 || 0,
								title: evt.target.value,
								isCompleted: false,
							};
							setTodo([...todo, newtodo]);

							window.localStorage.setItem(
								'todos',
								JSON.stringify([...todo, newtodo]),
							);

							evt.target.value = null;
						}
					}}
					type='text'
					placeholder='todo...'
				/>

				<ul className='todo-list'>
					{todo.map((row) => (
						<Todo
							title={row.title}
							key={row.id}
							id={row.id}
							deleteTodo={deleteTodo}
							complatedTodo={complatedTodo}
							isCompleted={row.isComplete}
						/>
					))}
				</ul>

				<div className='box-btn'>
						<button className='btn-todo btn'>
							All <strong className='num-todo'>{todo.length}</strong>
						</button>

						<button className='btn-todo btn' onClick={renderActive}>
							Active<strong className='num-todo'>{todo.length - complated}</strong>
						</button>

						<button className='btn-todo btn' onClick={renderCompleted}>
							Completed<strong className='num-todo'>{complated}</strong>
						</button>
					</div>
			</div>
		</>
	);
}

export default App;
