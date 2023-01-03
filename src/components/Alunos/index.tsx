import Header from './Header'
import RelacaoAlunos from './RelacaoAlunos'
import './styles.css'


export default function Alunos() {
    return (
        <div className="aluno-container">
           <Header/>
           <RelacaoAlunos/>
        </div>
    )
}