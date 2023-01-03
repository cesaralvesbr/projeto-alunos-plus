import { FiEdit, FiUserX } from "react-icons/fi";

export default function RelacaoAlunos() {
    return (
        <div>
            <h1>Relação de Aluno</h1>
            <ul>
                <li>
                    <b>Nome:</b>Cesar <br /><br />
                    <b>Email:</b>cesar@gmail.com<br /><br />
                    <b>Idade:</b>24<br /><br />

                    <button type="button">
                        <FiEdit size={25} color="#17202a" />
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a" />
                    </button>
                </li>

                <li>
                    <b>Nome:</b>Cesar <br /><br />
                    <b>Email:</b>cesar@gmail.com<br /><br />
                    <b>Idade:</b>24<br /><br />

                    <button type="button">
                        <FiEdit size={25} color="#17202a" />
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a" />
                    </button>
                </li>
            </ul>
        </div>
    );
}