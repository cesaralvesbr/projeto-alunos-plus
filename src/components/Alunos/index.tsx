import Header from './Header'
import RelacaoAlunos from './RelacaoAlunos'
import './styles.css'
import { useAluno } from '../../hooks/useAluno'
import Login from '../Login'
import { useSessao } from '../../hooks/useSessao'


export default function Alunos() {
    const { email, token, authorization } = useSessao<any>()
    const { data: todosAlunos } = useAluno<any>();

    return (
        <div className="aluno-container">           
            {token ?
                <div>
                    <Header email={email ?? ""} authorization={authorization} />
                    <RelacaoAlunos alunos={todosAlunos} />
                </div> :
                <Login />}
        </div>
    )
}