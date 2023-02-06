import { Aluno } from './../Models/Aluno';
import { useState } from "react"


export function usePesquisa(todosAlunos?: Aluno[]) {
    const [searchInput, setSearchInput] = useState<string>("")
    const [filtro, setFiltro] = useState<Aluno[]>([])

    // const valorFiltrado = (alunosFiltradoss: Aluno[]) => {
    //     console.log(alunosFiltradoss);
    // }

    const procurarAlunos = (valorProcura: string) => {
        setSearchInput(valorProcura);
        const searchInputAtualizado = valorProcura;

        if (searchInputAtualizado !== '') {
            const dadosFiltrados = todosAlunos?.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInputAtualizado.toLowerCase())
            });

            dadosFiltrados && setFiltro(dadosFiltrados);
            // valorFiltrado(dadosFiltrados as []);
        } else {         
            
            todosAlunos && setFiltro(todosAlunos);
            // valorFiltrado(todosAlunos as []);
        }
    }

    return { filtro, searchInput, procurarAlunos }
}