import React, { useState, useEffect } from 'react'
import './Sentiment.css'
import graph from '../../../media/images/download.png'
function Sentiment() {

  const [data, setData] = useState(0);
  const [positive, setPositive] = useState(0);
  const [negative, setNegative] = useState(0);
  const [neutral, setNeutral] = useState(0);


  
 
  const analysis=async(e)=> {
    
    e.preventDefault();
    let text=document.getElementById('text-content').value;
    try {

      const response = await fetch(`http://localhost:5000/api/fetchresult?message=${text}`, { method: "POST" });
      const jsonData = await response.json();
      setData(jsonData);
      
      const jsonString = data.response;
      const jsonArray = JSON.parse(jsonString);
      setNegative((jsonArray[0]*100).toFixed(2));
      setNeutral((jsonArray[1]*100).toFixed(2));
      setPositive((jsonArray[2]*100).toFixed(2));
      console.log(negative, neutral, positive);

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
      {/* <div className="graph">
        <img src=${graph} alt="graph" />
      </div> */}

    </div>
    </div>

  )
}

export default Sentiment;
