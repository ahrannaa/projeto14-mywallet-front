import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastrarEntrada from "./CadastrarEntrada";
import CadastrarSaida from "./CadastrarSaida";
import { UsuarioContext } from "./contexts/UsuarioContext";
import Cadastro from "./Cadastro";
import Extrato from "./Extrato";
import Login from "./Login";
import { useState } from "react";


export default function App() {
    document.body.style.backgroundColor = "#8C11BE";
    const [user, setUser] = useState({})

    return (

        <BrowserRouter>
            <UsuarioContext.Provider value={{ user, setUser}}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/extrato" element={<Extrato />} />
                    <Route path="/entrada" element={<CadastrarEntrada />} />
                    <Route path="/saida" element={<CadastrarSaida />} />
                </Routes>
            </UsuarioContext.Provider>
        </BrowserRouter>
    );

}