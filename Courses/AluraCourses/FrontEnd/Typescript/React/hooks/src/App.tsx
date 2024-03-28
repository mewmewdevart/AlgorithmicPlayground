import React, { useState, useEffect, useRef, useReducer } from 'react';
import './App.css';

// useReducer =======================
const reducer = (state, action) => {
	switch (action.type) {
		case 'add-task':
			return {
				tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
				tasksCount: state.tasksCount + 1,
			};
		case 'toggle-task':
			return {
				...state,
				tasks: state.tasks.map((item, index) => index === action.payload ? {...item, isCompleted: true } : item)
			}
		default:
			return state;
	}
};

function App() {
	// useState =======================
	// Estado para armazenar a contagem
	const [count, setCount] = useState(0);

	// Função para incrementar a contagem
	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};

	// useEffect =======================
	// Estado para definir o tipo de recurso
	const [resourceType, setResourceType] = useState('posts');

	// useEffect para demonstrar um efeito colateral (sem busca de dados)
	useEffect(() => {
		console.log(`Tipo de recurso alterado para: ${resourceType}`);

		// Função de limpeza (será chamada quando o componente for desmontado ou quando o recursoType mudar)
		return () => {
			console.log(`O componente anterior foi removido: ${resourceType}`);
		};
	}, [resourceType]); // Ocorre sempre que o tipo de recurso muda

	// Função para alterar o tipo de recurso
	const changeResourceType = (newResourceType) => {
		setResourceType(newResourceType);
	};

	// useRef =======================
	const [name, setName] = useState('');
	const renders = useRef(0);

	useEffect(() => {
		renders.current = renders.current + 1;
	});

	// useReducer =======================
	const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0 });
	const [inputValue, setInputValue] = useState('');

	return (
		<div>
			<div className="useStates">
				<h1>useState</h1>
				<p>{count}</p>
				<button onClick={incrementCount}>Incrementar</button>
			</div>

			<div className="useEffects">
				<h2>useEffect</h2>
				<p>{resourceType}</p>
				<div>
					<button onClick={() => changeResourceType('posts')}>Posts</button>
					<button onClick={() => changeResourceType('comments')}>Comentários</button>
					<button onClick={() => changeResourceType('todos')}>Todos</button>
				</div>
			</div>

			<div className="useRefs">
				<h3>useRef</h3>
				<input value={name} onChange={(e) => setName(e.target.value)} />
				<p>Hello, my name is {name}</p>
				<p>Renders: {renders.current}</p>
			</div>

			<div className="useReduces">
				<h4>useReducer</h4>
				<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
				<button
					onClick={() => {
						dispatch({ type: 'add-task', payload: inputValue });
						setInputValue(''); // Limpa o input sempre que pressiona o adicionar
					}}
				>
					Adicionar
				</button>

				{state.tasks.map((task, index) => (
					<p
						key={index}
						onClick={() => dispatch({ type: 'toggle-task', payload: index })}
						style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
					>
						{task.name}
					</p>
				))}
			</div>
		</div>
	);
}

export default App;
