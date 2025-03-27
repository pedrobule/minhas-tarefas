import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    satatus: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar conta de Internet',
    descricao: 'Baixar fatura',
    prioridade: enums.Prioridade.URGENTE,
    satatus: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para academia',
    descricao: 'Treinar costas',
    prioridade: enums.Prioridade.IMPORTANTE,
    satatus: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.satatus}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
