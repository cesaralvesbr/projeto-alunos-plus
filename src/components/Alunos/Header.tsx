import { Link } from "react-router-dom";
import './styles.css'

import { FiXCircle, FiClipboard } from 'react-icons/fi';
import { Aluno } from "../../Models/Aluno";
interface HeaderProps {
    email: string;
    pesquisa: string;
    authorization: any;
    alunos: Aluno[] | null;
    inputPesquisa: (valor:any)=> any;
    procurarAlunos: (pesquisa:any)=> any;
    efetuarLogout: (authorization:any)=> void;
}
export default function Header({ email,pesquisa, authorization, inputPesquisa, procurarAlunos, efetuarLogout }: HeaderProps) {  
         
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
                <input type="text" placeholder="Nome" onChange={(e)=>inputPesquisa(e.target.value)}/>
                <button type="button" className="button"
                onClick={()=>procurarAlunos(pesquisa)}>Filtrar aluno por nome (parcial)</button>
            </form>
        </div>
    )
}