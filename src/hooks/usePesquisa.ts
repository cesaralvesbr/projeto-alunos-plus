import { useEffect, useState } from "react"
import { useAluno } from "./useAluno";

export function usePesquisa<T = unknown>() {
    const [searchInput, setSearchInput] = useState<string>("")
    const [filtro, setFiltro] = useState<string[]>([])

    
        const {data:todosAlunos } = useAluno<any>();

  
    const procurarAlunos = (valorProcura: string) => {     

        setSearchInput(valorProcura);
        const searchInputAtualizado = valorProcura;
                
        if (searchInputAtualizado !== '') {
            const dadosFiltrados = todosAlunos.filter((item: string) => {
                return Object.values(item).join('').toLowerCase().includes(searchInputAtualizado.toLowerCase())
            });
            setFiltro(dadosFiltrados);
            console.log(dadosFiltrados);
        } else {
            console.log(todosAlunos);
            setFiltro(todosAlunos);
        }
    }

    return { filtro, searchInput, procurarAlunos }
}