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
    const response1 = await api.get('/list1');
    // const response3 = await api.get('/list3');
    setDados(response1.data);
    console.log('Response1 Data', response1.data);
    // console.log('Response3 Data', response3.data);
    // console.log('Response3 Data', response3.data);
  };

  const chartData = {
    labels: ['Distrimix', 'Dismelo', 'Supergiro'],
    datasets: [
      {
        label: 'Venda do Mês',
        data: dados,
        backgroundColor: [
          'rgba(25, 11, 632, 0.6)',
          'rgba(255, 8, 932, 0.6)',
          'rgba(25, 99, 1, 0.6)',
        ],
      },
    ],
  };

  //setando o arquivo no useState
  const handlechange = async (event) => {
    setCsv(event.target.files[0]);
  };
  const changeUpload = async () => {
    const resultado = await Papa.parse(Csv, {
      header: true,
      delimiter: ';',
      complete: (results, file) => {
        setDados(results.data);
        api.post('/upload', results.data);
        api.post('/upload3', results.data);
        console.log('Aqui resultado do PAPAPARSE', results.data);
      },
    });
  };

  return (
    <div className="App">
      {/* <h2> Insira o arquivo para tratar os dados</h2> */}
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
