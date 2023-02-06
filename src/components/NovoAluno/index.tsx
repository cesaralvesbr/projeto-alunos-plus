import { useEffect, useState } from "react";
import { FiCornerDownLeft, FiUserPlus } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useAluno } from "../../hooks/useAluno";
import { Aluno } from "../../Models/Aluno";
import './styles.css';

export default function NovoAluno() {
    const { alunoSelecionado, obterAlunoId, editarAluno, adicionarAluno } = useAluno<any>();
   
    useEffect(() => {
        setNome(alunoSelecionado?.nome ?? "")
        setEmail(alunoSelecionado?.email ?? "")
        setIdade(alunoSelecionado?.idade ?? 0)
    }, [alunoSelecionado?.email, alunoSelecionado?.idade, alunoSelecionado?.nome])

    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [idade, setIdade] = useState<number>(0)
    
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

    function adicionarNovoAluno(aluno: Aluno) {      
        adicionarAluno(aluno);
    }

    async function efetuarOperacao(event: React.SyntheticEvent<EventTarget>, nome: string, email: string, idade: number) {
        event.preventDefault();

        const dadosAluno = { id: Number(alunoId), nome, email, idade }
        if (alunoId === "0") {
            adicionarNovoAluno(dadosAluno);
        } else {
            editarAluno(dadosAluno);
        }

        return dadosAluno;
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

                <form onSubmit={(event) => efetuarOperacao(event, nome, email, idade)}>
                    <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                    <input type="email" placeholder="Email" value={email || ""} onChange={e => setEmail(e.target.value)} />
                    <input type="number" placeholder="Idade" value={idade} onChange={e => setIdade(e.target.valueAsNumber)} />
                    <button className="button" type="submit">
                        {alunoId === '0' ? 'Adicionar' : 'Atualizar'}
                    </button>
                </form>
            </div>
        </div>
    )

}