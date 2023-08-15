import React, { useEffect, useState } from "react";
import api from "./Api.js"; // Import the API service

export default function App() {
  const [solicitacao, setUser] = useState();
  const [idValue, setIdValue] = useState();

  const fetchData = () => {
    const requestData = {
      id: idValue
    };

    api
      .post("/Solicitacao", requestData)
      .then((response) => {
        console.log("API Response:", response.data);
        setUser(response.data);
      })
      .catch((err) => {
        console.error("Oops! An error occurred: " + err);
      });
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="idInput">Código Solicitação:</label>
        <input
          id="idInput"
          type="number"
          value={idValue}
          onChange={(e) => setIdValue(Number(e.target.value))}
        />
        <button onClick={fetchData}>Fetch Data</button>
      </div>
      {solicitacao !== null ? (
        <div>
        <p><b>Usuario:</b> {solicitacao?.Usuario}</p>
        <p><b>Data Início SLA:</b> {solicitacao?.DataInicioSla}</p>
        <p><b>Data de Criação:</b> {solicitacao?.DataCriacao}</p>
        <p><b>Data Alteração:</b> {solicitacao?.DataStatus}</p>
        <p><b>Id Vinculo:</b> {solicitacao?.ColaboradorEmpresaId}</p>

        <p><b>Status:</b> {solicitacao?.Status}</p>
        </div>
      ) : (
        <p>Nenhuma Solicitação Encontrada</p>
      )}
    </div>
  );
}
