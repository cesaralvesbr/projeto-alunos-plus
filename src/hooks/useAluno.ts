import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../assets/services/api"
import { Aluno } from "../Models/Aluno";
import { useSessao } from "./useSessao";

export function useAluno<T = unknown>() {
    const url = '/api/alunos';
    const [data, setData] = useState<T | null>();
    const [updateData, setUpdateData] = useState<boolean>(true);
    const history = useNavigate();

    const { token, authorization } = useSessao<any>()

    const obterAlunos = async () => {
        try {
            await api.get(url, authorization).then((response: AxiosResponse<any>) => { setData(response.data) }, ()=> token);
        } 
        catch (error) {            
            alert('Falha ao acessar api/alunos' + error)
            history('/')            
        }
    }

    const adicionarAluno = async (aluno: Aluno) => {
        await api({
            method: 'post',
            url: url,
            withCredentials: false,
            data: aluno,
            headers: {
                'content-Type': 'application/json'
            }
        }).then(response => {
            console.log({ "adição/sucesso": JSON.stringify(response.data) });
            setUpdateData(true)
        }).catch(error => {
            console.log(error)
        })
    }

    const editarAluno = async (aluno: Aluno) => {
        await api({
            method: 'put',
            url: url + "/" + aluno.id,
            withCredentials: false,
            data: aluno,
            headers: {
                'content-Type': 'application/json'
            }
        }).then(response => {
            console.log({ "edição/sucesso": JSON.stringify(response.data) });
            setUpdateData(true)
        }).catch(error => {
                console.log(error)
            })
        }

    useEffect(() => {
        if (updateData) {
            obterAlunos();
            setUpdateData(false)
        }
    }, [updateData])

    return { data, adicionarAluno, editarAluno }
}
