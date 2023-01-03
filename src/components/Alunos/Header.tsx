import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

import { FiXCircle, FiClipboard } from 'react-icons/fi';
export default function Header() {
    return (
        <div>
            <header>
                <FiClipboard size={40} />
                <span>Bem vindo, <strong>Cesar</strong></span>
                <Link className="button" to={'../aluno/novo/0'}>Novo Aluno</Link>
                <button type="button">
                    <FiXCircle size={35} color="#17202a" />
                </button>
            </header>
            <form>
                <input type="text" placeholder="Nome" />
                <button type="button" className="button">Filtrar aluno por nome (parcial)</button>
            </form>
        </div>
    )
}