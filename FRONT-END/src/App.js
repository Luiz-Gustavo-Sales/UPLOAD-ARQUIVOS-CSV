import React, { useState } from 'react';
import './App.css';
import Papa from 'papaparse';
import api from './service/api';
import Dismelo from './components/dismelo';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function App() {
  const chartData = {
    labels: [
      'Boston',
      'Worcester',
      'Springfield',
      'Lowell',
      'Cambridge',
      'New Bedford',
    ],
    datasets: [
      {
        label: 'Population',
        data: [6100, 6100, 6100, 6100, 6100, 6100],
        backgroundcolor: [
          'rgba(255,99,132,0.4)',
          'rgba(255,99,1,0.6)',
          'rgba(255,9,36,0.6)',
          'rgba(255,9,132,0.6)',
          'rgba(255,9,12,0.6)',
        ],
      },
    ],
  };

  //  const [Csv, setCsv] = useState(['']);
  const [Csv, setCsv] = useState(['']);
  const [dados, setDados] = useState(['']);
  //setando o arquivo no useState
  const handlechange = async (event) => {
    setCsv(event.target.files[0]);
  };
  const changeUpload = async () => {
    const resultado = await Papa.parse(Csv, {
      header: true,
      delimiter: ';',
      complete: (results, file) => {
        var response = results.data;
        api.post('upload', response);
        console.log('Aqui resultado do PAPAPARSE', results.data);
      },
    });
  };

  return (
    <div className="App">
      <h2> Insira o arquivo para tratar os dados</h2>
      <header className="App-header">
        <h3>INSIRA ARQUIVO CSV</h3>
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

        <div className="graficos">
          <br></br>
          <BarChart
            width={600}
            height={300}
            data={dados}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 50,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="preco" />
            {/*metricas laterias*/}
            <YAxis />
            {/*Ação passar mouse por cima*/}
            <Tooltip />
            <Legend />
            <Bar dataKey="preco" fill="#8884d8" />

            {/* <Bar dataKey="uv" fill="#82ca9d" />*/}
          </BarChart>
        </div>

        <Dismelo />
      </header>
    </div>
  );
}
export default App;
//const csvtojson = require('csvtojson');
//const csv = require('fast-csv');
