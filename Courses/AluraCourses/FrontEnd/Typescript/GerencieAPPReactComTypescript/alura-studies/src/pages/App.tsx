import React, {useState} from 'react';
import Button from '../components/Botao';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'; // 

import Cronometro from '../components/Cronometro';
import { ITarefa } from '../types/tarefas';

function App() {
	const [tarefas, setTarefas] = useState<ITarefa[] | []> ([]);
	const [selecionado, setSelecionado] = useState<ITarefa>();

	function selecionaTarefas(tarefasSelecionada: ITarefa){
		setSelecionado(tarefasSelecionada);
		setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
			...tarefa,
			selecionado: tarefa.id === tarefasSelecionada.id ? true : false
		})));
	}

	function finalizarTarefa(){
		if(selecionado){
			setSelecionado(undefined);
			setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
				if(tarefa.id === selecionado.id)
					return( {...tarefa, selecionado: false, completado: true})

				return (tarefa);
			}));
		}
	}

	return (
		<div className={style.AppStyle}>
		 <Formulario setTarefas={setTarefas}/>
		 <Lista
		 	tarefas={tarefas}
			selecionaTarefa = {selecionaTarefas}
			/>
		 <Cronometro
		 	selecionado={selecionado}
			finalizarTarefa={finalizarTarefa}
			
			/>
		</div>
	);
}

export default App;
