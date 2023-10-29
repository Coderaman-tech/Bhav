import React,{useState,useEffect} from 'react'
import './Sentiment.css'
import graph from '../../../media/images/download.png'
function Sentiment() {

const [data, setData] = useState(0);

useEffect(()=>{
  fetchData();
},[]);

const fetchData=async ()=>{
  try{
    const response=await fetch('http://localhost:3000/sentiment/fetchresult');
    const jsonData=await response.json();
    setData(jsonData);
    console.log(data);
  }
  catch(error){
    console.log('Error',error);
  }
}

  function stripe() {
    let positive = 99.23;
    let negative = 0.0013;
    let neutral = 0.006;
    return (
      `
    <div className="positive">
    Positive:${positive}%
    </div>
    <div className="negative">
    Negative:${negative}%
    </div>
    <div className="neutral">
    Neutral:${neutral}%
    </div>
    <div className="graph">
    <img src=${graph} alt="graph"/>
    </div>
   
    `
    )
  }
  function analysis() {

    let container = document.querySelector('#container');
    container.innerHTML += stripe();
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
      <div id="container"></div>

    </div>


  )
}

export default Sentiment;
