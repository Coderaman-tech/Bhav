import React from 'react'
import './Sentiment.css'
import graph from '../../../media/images/download.png'
function sentiment() {

function stripe(){
  let positive=99.23;
  let negative=0.0013;
  let neutral=0.006;
  return(
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
  function analysis(){

    let container=document.querySelector('#container');
    container.innerHTML+=stripe();
  }

  return (
    <div>
      
      <h2 className='senti-header'>Sentiment Analysis</h2>
      <input type="text" name="" id="text-content" />
      <button className='button i-button' onClick={analysis}>
                Try it
            </button>
           
            <div id="container"></div>

    </div>

    
  )
}

export default sentiment
