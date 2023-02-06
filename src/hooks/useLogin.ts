import { useState } from "react"
import { useNavigate } from "react-router-dom";
import api from "../assets/services/api"

export function useLogin<T = unknown>() {
    const [data, setData] = useState<T | null>(null);  
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

    const efetuarLogout = async (authorization:any) => {       
        try 
        {         
            localStorage.clear();                 
            localStorage.setItem('token','');
            authorization.headers = '';  
            history('/')            

        } catch (error) {
            alert('Não foi possível efetuar o logout' + error)
        }
    }

    return{data, efetuarLogin, efetuarLogout}
}
