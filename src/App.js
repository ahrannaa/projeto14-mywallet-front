import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Login from "./Login";


export default function App() {
    document.body.style.backgroundColor = "#8C11BE";

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/extrato" element={<Extrato/>}/>
                <Route path="/entrada" element={<Entrada/>}/>
                <Route path="/saida" element={<Saida/>}/>
                
            </Routes>
        </BrowserRouter>
    );

}