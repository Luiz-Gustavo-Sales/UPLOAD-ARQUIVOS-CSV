import React, { useState } from 'react';
import './App.css';
import Papa from 'papaparse';
import api from './service/api';
import Dashboard from './dashboard';
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
  //estado do arquivo CSV
  const [Csv, setCsv] = useState(['']);
  const [dados, setDados] = useState(['']);
  //setando o arquivo no useState
  const handlechange = async (event) => {
    //setCsv(event.target.files[0]);
    console.log('event ', event);
    var dadoscsv = event.target.files[0];
    console.log('Olha aqui event do handleChange ', dadoscsv);
    const response = await api.post('upload', dadoscsv);
  };
  const changeUpload = async () => {
    const csv = await api.get('/download');
    console.log('OLha aqui ', csv);
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
      </header>
    </div>
  );
}
export default App;
//const csvtojson = require('csvtojson');
//const csv = require('fast-csv');
