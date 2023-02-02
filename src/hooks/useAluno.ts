import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../assets/services/api"
import { Aluno } from "../Models/Aluno";
import { useSessao } from "./useSessao";

export function useAluno<T = unknown>() {
    const url = '/api/alunos';
    const [data, setData] = useState<T | null>();
    const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>({} as Aluno);
    const [updateData, setUpdateData] = useState<boolean>(true);
    const history = useNavigate();

    const { token, authorization } = useSessao<any>()

    const obterAlunos = async () => {
        try {
            await api.get(url, authorization).then((response: AxiosResponse<any>) => { setData(response.data) }, () => token);
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
        debugger;
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
                setUpdateData(true);
            });
        } catch (error) {            
            alert('Falha ao acessar api/alunos' + error)
        }
    }

    useEffect(() => {
        if (updateData) {
            obterAlunos();
            setUpdateData(false)
        }
    }, [updateData])

    return { data, alunoSelecionado, setAlunoSelecionado, obterAlunos, obterAlunoId, adicionarAluno, editarAluno, excluirAluno }
}
