import Header from './Header'
import RelacaoAlunos from './RelacaoAlunos'
import './styles.css'
import { SetStateAction, useEffect, useState } from 'react'
import { Aluno } from '../../Models/Aluno'
import { useAluno } from '../../hooks/useAluno'


export default function Alunos() {

    const [aluno, setAluno] = useState<Aluno>({} as Aluno)
    const [alunos, setAlunos] = useState<Aluno[]>([] as Aluno[]);
    
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('email')

  
    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const {data: todosAlunos } = useAluno<any>(authorization, token); 


    return (
        <div className="aluno-container">
            <Header email={email?? ""}/>
            <RelacaoAlunos alunos={todosAlunos}/>
        </div>
    )
}