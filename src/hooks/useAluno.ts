import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import api from "../assets/services/api"

export function useAluno<T = unknown>(authorization: any,  token:any) {
    const [data, setData] = useState<T | null>();
    const [updateData, setUpdateData] = useState<boolean>(true);
      
    
    const obterAlunos = async () => {
        try {       
            console.log("chamou")    
            await api.get('/api/alunos', authorization).then((response: AxiosResponse<any>) => {setData(response.data) },token);          
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

    return { data }
}
