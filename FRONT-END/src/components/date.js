import React, { useState } from "react";
import "../App.css";
import Papa from "papaparse";
import api from "../service/api";
//import Dashboard from './dashboard';
import { Line, Bar, Pie } from "react-chartjs-2";
const Chartt = require("chart.js");
function App() {
  const [Csv, setCsv] = useState([""]);
  const [dados, setDados] = useState([""]);
  const [dismelo, setDismelo] = useState([""]);
  const handleEnviar = async () => {
    const response1 = await api.get("/filtroCsv");
    console.log("Response 1 aqui ", response1);

    setDados(response1.data);

    console.log("Response1 Data", response1.data);
  };

  //passar os dados apra gerar os graficos
  const chartData = {
    type: "bar",
    labels: ["Distrimix", "Distrimix"],
    datasets: [
      {
        //label: "Venda do Mês",
        data: dados,
        backgroundColor: ["rgba(215, 24, 62, 0.6)", "rgba(25, 11, 632, 0.6)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      },
    ],

    // options: {
    //   title: {
    //     display: true,
    //     text: "Venda do Mês Atual",
    //     fontSize: 25,
    //   },
    // },
  };

  //setando o arquivo no useState
  const handlechange = async (event) => {
    setCsv(event.target.files[0]);
  };
  //passar o arquivo CSV para o BACK-END PARA TRATAR O ARQUIVO
  const changeUpload = async () => {
    api
      .post("/arquivoCsv", Csv, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((resp) => {
        console.log("OBA ", resp);
      });
  };

  return (
    <div className="App">
      {/* <h2> Insira o arquivo para tratar os dados</h2> */}
      <header className="App-header">
        <h3>TESTE COM DATE</h3>
        <input
          accept=".csv"
          type="file"
          name="file"
          className="input-upload"
          onChange={handlechange}
        />
        <button className="btn-csv" onClick={changeUpload}>
          Enviar
        </button>
        <button className="btn-csv" onClick={handleEnviar}>
          Gerar Relatorio
        </button>
        <div className="graficos">
          <Bar
            data={chartData}
            width={300}
            height={200}
            options={{
              legend: false,
              title: {
                display: true,
                text: "Venda do Mês Dismelo e Dixtrimix",
                fontSize: 26,
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
                xAxes: [
                  {
                    //  categoryPercentage: 0.9,
                    barPercentage: 0.7,
                  },
                ],
              },
            }}
          />
          <div></div>
        </div>
      </header>
    </div>
  );
}
export default App;
//const csvtojson = require('csvtojson');
//const csv = require('fast-csv');
