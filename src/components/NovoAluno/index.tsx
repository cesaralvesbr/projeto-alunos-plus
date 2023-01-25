import { SetStateAction, useEffect, useState } from "react";
import { FiCornerDownLeft, FiUserPlus } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAluno } from "../../hooks/useAluno";
import { Aluno } from "../../Models/Aluno";
import './styles.css';

export default function NovoAluno() {
    const { alunoSelecionado, obterAlunoId } = useAluno<any>();

    useEffect(() => {
        setNome(alunoSelecionado?.nome ?? "")
        setEmail(alunoSelecionado?.email ?? "")
        setIdade(alunoSelecionado?.idade ?? 0)
    }, [alunoSelecionado?.email, alunoSelecionado?.idade, alunoSelecionado?.nome])

    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [idade, setIdade] = useState<number>(0)
    const [aluno, setAluno] = useState<Aluno | null>({} as Aluno);
     
    const { alunoId } = useParams();

    useEffect(() => {
        if (alunoId === '0')
            return;
        else
            carregarAluno();
    }, [alunoId])


    async function carregarAluno() {      
        obterAlunoId(alunoId as string)
    }

    async function efetuarOperacao(nome: string, email: string, idade:number) {      
        setAluno({ id: 0, nome, email, idade })       
    }

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
                    <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input type="email" placeholder="Email" value={email || ""} onChange={e => setEmail(e.target.value)} />
                    <input type="number" placeholder="Idade" value={idade} onChange={e => setIdade(e.target.valueAsNumber)} />
                    <button className="button" type="submit" onClick={() => efetuarOperacao(nome, email, idade)}>
                        {alunoId === '0' ? 'Adicionar' : 'Atualizar'}
                    </button>
                </form>
            </div>
        </div>
    )

}