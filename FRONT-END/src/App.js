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
      <header className="App-header">
        <Dismelo />
      </header>
    </div>
  );
}
export default App;
//const csvtojson = require('csvtojson');
//const csv = require('fast-csv');
