import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../../types/tarefas'

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
          selecionaTarefa ={selecionaTarefa}
          key = {item.id}
          /* Forma 01 de fazer =>
            tarefa={item.tarefa}
            tempo={item.tempo} */
            {...item} // => usar todo o atributo daquele componente como prop similar ao * pra pegar tudo
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;