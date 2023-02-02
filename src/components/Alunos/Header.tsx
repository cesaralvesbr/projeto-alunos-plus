import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'

import { FiXCircle, FiClipboard } from 'react-icons/fi';
import { Aluno } from "../../Models/Aluno";
import { useLogin } from "../../hooks/useLogin";
import { usePesquisa } from "../../hooks/usePesquisa";
interface HeaderProps {
    email: string;
    authorization: any;
}
export default function Header({ email, authorization }: HeaderProps) {  
    const { efetuarLogout } = useLogin<any>()      
    const { procurarAlunos } = usePesquisa<any>()    

    const [pesquisa, setPesquisa] = useState<string>("")
    return (
        <div>
            <header>
                <FiClipboard size={40} />
                <span>Bem vindo, <strong>{email}</strong></span>
                <Link className="button" to={'../aluno/novo/0'}>Novo Aluno</Link>
                <button type="button" onClick={() => efetuarLogout(authorization)}>
                    <FiXCircle size={35} color="#17202a" />
                </button>
            </header>
            <form>
                <input type="text" placeholder="Nome" onChange={(e)=>setPesquisa(e.target.value)}/>
                <button type="button" className="button"
                onClick={()=>procurarAlunos(pesquisa)}>Filtrar aluno por nome (parcial)</button>
            </form>
        </div>
    )
}