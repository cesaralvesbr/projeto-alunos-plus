import React, { useState } from "react";
import "./styles.css";
import logoImagem from '../../assets/login.png'
import { useLogin } from "../../hooks/useLogin";


export default function Login() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
   
    const { efetuarLogin } = useLogin<any>()

    async function login(event: React.SyntheticEvent<EventTarget>) {
        event.preventDefault();
       
      const entradaLogin = {email, password}
      
        efetuarLogin(entradaLogin);        
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImagem} alt="login" id="img1" />
                <form onSubmit={login}>
                    <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    );
}