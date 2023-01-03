import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from "./components/Login";
import Alunos from "./components/Alunos";
import NovoAluno from "./components/NovoAluno";

export default function RoutesConfig() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/alunos" element={<Alunos />} />
                <Route path="/aluno/novo/:alunoId" element={<NovoAluno />} />
            </Routes>
        </BrowserRouter>
    );
}
