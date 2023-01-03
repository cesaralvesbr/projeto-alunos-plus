import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../assets/services/api"
import { LoginView } from "../Models/LoginView";

export function useLogin<T = unknown>() {
    const [data, setData] = useState<T | null>(null);
    const [updateData, setUpdateData] = useState<boolean>(true);
    const history = useNavigate();

    const efetuarLogin = async (entrada: any) => {
       
        try 
        {
            const response = await api.post('/api/Account/LoginUser', entrada);
            localStorage.setItem('email',entrada.email);
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('expiration',response.data.expiration);                   

            history('/alunos')
        } catch (error) {
            alert('O login falhou' + error)
        }
    }

    return{data, efetuarLogin}
}
