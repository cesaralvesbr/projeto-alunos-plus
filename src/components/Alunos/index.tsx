import Header from './Header'
import RelacaoAlunos from './RelacaoAlunos'
import './styles.css'
import { useAluno } from '../../hooks/useAluno'
import Login from '../Login'
import { useSessao } from '../../hooks/useSessao'
import { useEffect, useState } from 'react'


export default function Alunos() {
    const { email, token, authorization } = useSessao<any>()
    const { data: todosAlunos, excluirAluno} = useAluno<any>(true);
    
    return (
        <div className="aluno-container">
            {token ?
                <div>
                    <Header email={email ?? ""} authorization={authorization} alunos={todosAlunos} />
                    <RelacaoAlunos alunos={todosAlunos} excluirAluno={excluirAluno} />
                </div> :
                <Login />}
        </div>
    )
}