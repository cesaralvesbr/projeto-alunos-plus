import { FiEdit, FiUserX } from "react-icons/fi";
import { Aluno } from "../../Models/Aluno";

interface RelacaoAlunosProps {
    alunos: Aluno[] | null
}

export default function RelacaoAlunos({ alunos }: RelacaoAlunosProps) {

    function relacaoAlunos() {
        return alunos?.map((aluno) => {
            return (
                <ul key={aluno.id}>
                    <li key={aluno.id}>
                        <b>Nome:</b>{aluno.nome} <br /><br />
                        <b>Email:</b>{aluno.email}<br /><br />
                        <b>Idade:</b>{aluno.idade}<br /><br />

                        <button type="button">
                            <FiEdit size={25} color="#17202a" />
                        </button>
                        <button type="button">
                            <FiUserX size={25} color="#17202a" />
                        </button>
                    </li>
                </ul>)
        })
    }

    return (
        <div>
            <h1>Relação de Aluno</h1>
            {relacaoAlunos()}
        </div>
    );
}