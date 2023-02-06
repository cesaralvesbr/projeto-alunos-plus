import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../assets/services/api"
import { Aluno } from "../Models/Aluno";
import { useSessao } from "./useSessao";

export function useAluno<T = unknown>(carregarAlunos: boolean = false) {
    const url = '/api/alunos';
    const [data, setData] = useState<T | null>();
    const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>({} as Aluno);
    const [loading, setLoading] = useState<boolean>(carregarAlunos);
    const history = useNavigate();

    const { token, authorization } = useSessao<any>()


    const obterAlunos = async () => {
        try {
            await api.get(url, authorization).then((response: AxiosResponse<any>) => { setData(response.data); console.log(response.data); setLoading(false); }, () => token);

        }
        catch (error) {
            alert('Falha ao acessar api/alunos' + error)
            history('/')
        }
    }

    const obterAlunoId = async (id: string) => {
        try {
            await api.get(`${url}/${id}`, authorization).then((response: AxiosResponse<any>) => {
                setAlunoSelecionado(response.data)
            }, () => token);
        } catch (error) {
            alert('Falha ao acessar api/alunos' + error)
            history('/alunos')
        }

    }

    const adicionarAluno = async (aluno: Aluno) => {
        try {
            await api.post(`${url}`, aluno, authorization).then((response: AxiosResponse<any>) => {
            });
            history('/alunos');
        } catch (error) {
            alert('Falha ao acessar api/alunos' + error)
        }
    }

    const editarAluno = async (aluno: Aluno) => {
        try {
            await api.put(`${url}/${aluno.id}`, aluno, authorization).then((response: AxiosResponse<any>) => {
            });
        } catch (error) {
            alert('Falha ao acessar api/alunos' + error)
        }
    }

    const excluirAluno = async (id: number) => {
        try {
            await api.delete(`${url}/${id}`, authorization).then((response: AxiosResponse<any>) => {                
                setLoading(true);
                history('/alunos');
            });
        } catch (error) {
            alert('Falha ao acessar api/alunos' + error)
        }
    }

    useEffect(() => {       
        if (carregarAlunos && loading)
            obterAlunos();
        carregarAlunos = false;
    }, [carregarAlunos, loading])

    return { data, alunoSelecionado, loading, setAlunoSelecionado, obterAlunos, obterAlunoId, adicionarAluno, editarAluno, excluirAluno }
}
