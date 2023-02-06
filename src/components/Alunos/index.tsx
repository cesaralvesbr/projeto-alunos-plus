import Header from './Header'
import RelacaoAlunos from './RelacaoAlunos'
import './styles.css'
import { useAluno } from '../../hooks/useAluno'
import Login from '../Login'
import { useSessao } from '../../hooks/useSessao'
import { useEffect, useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { usePesquisa } from '../../hooks/usePesquisa'
import { Aluno } from '../../Models/Aluno'
import { FiClipboard, FiXCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export default function Alunos() {
    const { email, token, authorization } = useSessao<any>()
    const { data: todosAlunos, excluirAluno } = useAluno<any>(true);
    const { efetuarLogout } = useLogin<any>()
    const { procurarAlunos, filtro, searchInput } = usePesquisa(todosAlunos as Aluno[])

    const [pesquisa, setPesquisa] = useState<string>("")

    const obterValorPesquisa = (valorProcura: string) => {
        setPesquisa(valorProcura);
        if (valorProcura !== "") {
            procurarAlunos(pesquisa)
            console.log(filtro);
        }
    }


    useEffect(() => {
        obterValorPesquisa(pesquisa);
    }, [pesquisa])


    return (

        <div className="aluno-container">
            {token ?
                <div>
                    <Header email={email ?? ""}
                        authorization={authorization}
                        alunos={todosAlunos}
                        pesquisa={pesquisa}
                        efetuarLogout={efetuarLogout}
                        inputPesquisa={obterValorPesquisa}
                        procurarAlunos={procurarAlunos}
                    />

                    <RelacaoAlunos alunos={todosAlunos} excluirAluno={excluirAluno} filtro={filtro} searchInput={searchInput} />
                </div> :
                <Login />}
        </div>
    )
}