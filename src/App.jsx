import React from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';
import Main from './Components/Main/Main';

function App() {
	const [todo, setTodo] = React.useState([
		{
			id: 0,
			title: '11',
			isComplate: false,
		},
	]);

	const complatedTodo = (evt) => {
		todo.isComplate = true;
		if (todo.isComplate === true) {
		alert('Finished');
		}
	};

	const deleteTodo = (evt) => {
		const todoId = evt.target.dataset.todoId - 0;

		const filteredTodos = todo.filter((row) => row.id !== todoId);

		setTodo([...filteredTodos]);
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
						/>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
