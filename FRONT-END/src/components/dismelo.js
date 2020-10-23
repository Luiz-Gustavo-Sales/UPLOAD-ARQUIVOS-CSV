import React, { useState } from 'react';
import '../App.css';
import Papa from 'papaparse';
import api from '../service/api';
//import Dashboard from './dashboard';
import { Line, Bar, Pie } from 'react-chartjs-2';

function App() {
  const [Csv, setCsv] = useState(['']);
  const [dados, setDados] = useState(['']);
  const [dismelo, setDismelo] = useState(['']);
  const handleEnviar = async () => {
    const response = await api.get('/list');

    setDismelo(response.data);
  };

  const chartData = {
    labels: ['Dismelo', 'Distrimix', 'SuperGiro'],
    datasets: [
      {
        label: 'Venda do Mês',
        data: [6300, 6800, 900],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 8, 132, 0.6)',
          'rgba(255, 99, 1, 0.6)',
        ],
      },
    ],
  };

  //setando o arquivo no useState
  const handlechange = async (event) => {
    setCsv(event.target.files[0]);
    console.log('Teste - ', Csv);
  };
  const changeUpload = async () => {
    const resultado = await Papa.parse(Csv, {
      header: true,
      delimiter: ';',
      complete: (results, file) => {
        setDados(results.data);
        api.post('/upload', results.data);
        console.log('Aqui resultado do PAPAPARSE', results.data);
      },
    });
  };

  return (
    <div className="App">
      <h2> Insira o arquivo para tratar os dados</h2>
      <header className="App-header">
        <h3>INSIRA ARQUIVO CSV- GRAFICO DE BARRAS</h3>
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
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </header>
    </div>
  );
}
export default App;
//const csvtojson = require('csvtojson');
//const csv = require('fast-csv');
