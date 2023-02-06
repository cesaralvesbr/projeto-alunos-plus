import { Aluno } from './../Models/Aluno';
import { useState } from "react"


export function usePesquisa(todosAlunos?: Aluno[]) {
    const [searchInput, setSearchInput] = useState<string>("")
    const [filtro, setFiltro] = useState<Aluno[]>([])


    const procurarAlunos = (valorProcura: string) => {
        setSearchInput(valorProcura);
        const searchInputAtualizado = valorProcura;

        if (searchInputAtualizado !== '') {
            const dadosFiltrados = todosAlunos?.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInputAtualizado.toLowerCase())
            });
            dadosFiltrados && setFiltro(dadosFiltrados);
        } else {
            todosAlunos && setFiltro(todosAlunos);
        }
    }

    return { filtro, searchInput, procurarAlunos }
}