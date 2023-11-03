import React, { useState, useEffect } from 'react'
import './Sentiment.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Pie } from "react-chartjs-2";
import graph from '../../../media/images/download.png'
ChartJS.register(ArcElement, Tooltip, Legend);

function Sentiment() {


  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [chartData, setChartData] = useState({
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "Users Gained ",
        data: [0, 0, 0],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#2a71d0",
          "#f3ba2f",
          "#50AF95"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  React.useEffect(() => {
    const data = chartData.datasets[0].data;

    const updatedData = [...data];
    updatedData[0] = positive;
    updatedData[1] = negative;
    updatedData[2] = neutral;

    setChartData({
    ...chartData , datasets : [{ ...chartData.datasets[0] , data : [positive, negative , neutral]}]
    });
  }, [positive, negative, neutral]);

  const analysis = async (e) => {
    e.preventDefault();
    let text = document.getElementById('text-content').value;
    try {

      const response = await fetch(`http://localhost:5000/api/fetchresult?message=${text}`, { method: "POST" });
      const jsonData = await response.json();
      const jsonString = jsonData.response;
      console.log(jsonString)
      const jsonArray = JSON.parse(jsonString);
      setNegative((jsonArray[0] * 100).toFixed(2));
      setNeutral((jsonArray[1] * 100).toFixed(2));
      setPositive((jsonArray[2] * 100).toFixed(2));
      console.log(chartData);
    }
    catch (error) {
      console.log('Error', error);
    }
  }

  return (
    <div>

      <h2 className='senti-header'>Sentiment Analysis</h2>
      <form action="" method="post">
        <input type="text" name="" id="text-content" />
        <button className='button i-button' onClick={analysis}>
          Try it
        </button>
      </form>
      <div id="container">

        <div className="positive">
          Positive:{positive}%
        </div>
        <div className="negative">
          Negative:{negative}%
        </div>
        <div className="neutral">
          Neutral:{neutral}%
        </div>
        <div style={{ height: '50vh', width: '50vh' }}>
          {chartData && <Pie
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Users Gained between 2016-2020"
                }
              }
            }}
          />}
        </div>

      </div>
    </div>

  )
}

export default Sentiment;
