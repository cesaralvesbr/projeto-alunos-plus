import { useEffect } from "react";
import { FiEdit, FiUserX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { usePesquisa } from "../../hooks/usePesquisa";
import { Aluno } from "../../Models/Aluno";

interface RelacaoAlunosProps {
    alunos: Aluno[] | null,
    filtro: Aluno[] | null,
    searchInput: string,
    excluirAluno(id: number): Promise<void>;
}

export default function RelacaoAlunos({ alunos, filtro,searchInput, excluirAluno }: RelacaoAlunosProps) {
    const history = useNavigate();
  
    function editarAlunoSelecionado(id: number) {
        history(`../aluno/novo/${id}`)
    }

    function excluirAlunoSelecionado(id: number) {
        excluirAluno(id)
    }

    function relacaoAlunos() {
        return alunos?.map((aluno) => {
            return (
                <li key={aluno.id}>
                    <b>Nome:</b>{aluno.nome} <br /><br />
                    <b>Email:</b>{aluno.email}<br /><br />
                    <b>Idade:</b>{aluno.idade}<br /><br />

                    <button type="button">
                        <FiEdit size={25} color="#17202a" onClick={() => editarAlunoSelecionado(aluno.id)} />
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a" onClick={() => excluirAlunoSelecionado(aluno.id)} />
                    </button>
                </li>
            )
        })
    }

    function relacaoAlunosFiltrados() {
        return filtro?.map((aluno) => {
            return (
                <li key={aluno.id}>
                    <b>Nome:</b>{aluno.nome} <br /><br />
                    <b>Email:</b>{aluno.email}<br /><br />
                    <b>Idade:</b>{aluno.idade}<br /><br />

                    <button type="button">
                        <FiEdit size={25} color="#17202a" onClick={() => editarAlunoSelecionado(aluno.id)} />
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a" onClick={() => excluirAlunoSelecionado(aluno.id)} />
                    </button>
                </li>
            )
        })
    }
  
    return (
        <div>
            <h1>Relação de Aluno</h1>
            {searchInput.length > 1 ? (
                <ul>
                    
                    {relacaoAlunosFiltrados()}
                </ul>) :
                <ul>
                    {relacaoAlunos()}
                </ul>}
        </div>
    );
}