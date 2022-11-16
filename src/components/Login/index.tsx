import React from "react";
import "./styles.css";
import logoImagem from '../../assets/login.png'

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImagem} alt="login" id="img1" />
                <form action="">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button className="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    );
}