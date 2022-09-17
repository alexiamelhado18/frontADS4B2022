import './App.css';
import React from "react";
import { Link } from 'react-router-dom';

export default function VerNome() {
    function exibirNome() {
        console.log(localStorage.getItem("name"));
        return localStorage.getItem("name");
    }
    return (
        <div className="App" onLoad={exibirNome}>
            <h1>{exibirNome() == "" ? 'Você não tem nome' : exibirNome()}</h1>
            <br/>
            <Link to="/Fim">Ultima tela para navegação</Link>
        </div>
    );
}
