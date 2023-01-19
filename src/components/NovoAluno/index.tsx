import { useState } from "react";
import { FiCornerDownLeft, FiUserPlus } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAluno } from "../../hooks/useAluno";
import { Aluno } from "../../Models/Aluno";
import './styles.css';

export default function NovoAluno() {
    const [aluno, setAluno] = useState<Aluno>({} as Aluno)
    const history = useNavigate();

   
    const { alunoId } = useParams();
    return (
        <div className="novo-aluno-container">
            <div className="content">

                <section className="form">
                    <FiUserPlus size={105} color="#17202a" />
                    <h2>{alunoId === '0' ? 'Incluir Novo Aluno' : 'Atualizar Aluno'}</h2>
                    <Link className="back-link" to="/alunos">
                        <FiCornerDownLeft size={25} color="#039cfb" />
                        Retornar
                    </Link>
                </section>

                <form>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="number" placeholder="Idade" />
                    <button className="button" type="submit">
                        {alunoId === '0' ? 'Adicionar' : 'Atualizar'}
                    </button>
                </form>
            </div>
        </div>
    )

}