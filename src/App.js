import React, { useEffect, useState } from "react";
import api from "./Api.js"; // Import the API service

export default function App() {
  const [solicitacoes, setUser] = useState();
  const [idValue, setIdValue] = useState();

  const fetchData = () => {
    const requestData = {
      id: idValue,
    };

    api
      .post("/SolicitacoesWeb", requestData)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => {
        console.error("Oops! An error occurred: " + err);
      });
  };

  return (
    <div className="App" style={{ marginLeft: "20px", marginTop: "20px" }}>
      <div>
        <label htmlFor="idInput">Código Empresa:</label>
        <input
          id="idInput"
          type="number"
          value={idValue}
          onChange={(e) => setIdValue(Number(e.target.value))}
        />
        <button onClick={fetchData}>Fetch Data</button>
      </div>
      {solicitacoes != null ? (
        <div>
          <h2>Solicitações:</h2>
          <hr></hr>
          {solicitacoes.map((solicitacaoItem, index) => (
            <div key={index}>
              <p>
                <b>Id:</b> {solicitacaoItem.Id}
              </p>
              <p>
                <b>Usuario:</b> {solicitacaoItem.Usuario}
              </p>
              <p>
                <b>Data Início SLA:</b> {solicitacaoItem.DataInicioSla}
              </p>
              <p>
                <b>Data de Criação:</b> {solicitacaoItem.DataCriacao}
              </p>
              <p>
                <b>Data Alteração:</b> {solicitacaoItem.DataStatus}
              </p>
              <p>
                <b>Id Vinculo:</b> {solicitacaoItem.ColaboradorEmpresaId}
              </p>
              <p>
                <b>Status:</b> {solicitacaoItem.NomeStatus}
              </p>
              <hr></hr>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhuma Solicitação Encontrada</p>
      )}
    </div>
  );
}
