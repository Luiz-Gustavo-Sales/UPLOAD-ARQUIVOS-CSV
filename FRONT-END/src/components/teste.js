import React, { useState } from "react";
import "../App.css";
import Papa from "papaparse";
import api from "../service/api";
//import Dashboard from './dashboard';
import { Line, Bar, Pie } from "react-chartjs-2";
import { title } from "process";
import { YAxis } from "recharts";
const Chartt = require("chart.js");
function App() {
  const [Csv, setCsv] = useState([""]);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        backgroundColor: ["rgba(215, 24, 62, 0.6)"],
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: ["rgba(255, 206, 86, 0.2)"],
        label: "Bodegamix 2020",
        data: [100, 800, 450, 660, 790],
      },
      {
        backgroundColor: ["rgba(100, 169, 62, 0.6)"],
        borderColor: ["rgba(255, 206, 86, 0.2)"],
        pointBackgroundColor: ["rgba(0, 000, 00, 0.2)"],
        label: "Bodegamix 2019 (M)",
        data: [400, 100, 300, 200, 400],
      },
    ],
  };
  return (
    <div className="App">
      <header className="App-header">
        <Line data={data} width={900} height={300} />
      </header>
    </div>
  );
}
export default App;
