import React from 'react'
import './Chatgpt.css'
import send from './assets/send.svg'
import bot from './assets/bot.svg';
import user from './assets/user.svg';
import { Link } from "react-router-dom";
// import {Helmet} from "react-helmet";
// import Typekit from 'react-typekit';

function Chatgpt() {

let loadInterval; 

//at the loading shows ....
function loader(element){
  element.textContent='.';

  loadInterval=setInterval(()=>{
    element.textContent+='.';

    if(element.textContext==='....'){
      element.textContent='.';
    }
  },300)
}

//print output one by one (printing style)

function typeText(element,text){

  let index=0;
  let interval=setInterval(()=>{
    if(index<text.length){
      element.innerHTML+=text.charAt(index);
      index++;
    }
    else{
      clearInterval(interval);
    }
  },20)
}

//generate unique id for letter

function generateUniqueID(){
  const timestamp=Date.now();
  const randomNumber=Math.random();
  const hexadecimalString=randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}


function chatStripe(isAi,value,uniqueID){
    return (
      `
      <div className="chat-wrapper ${isAi && 'ai'}">
      <div className="chat">
      <div className="profile">
      <img
      src=${isAi?bot:user}
      alt=${isAi?'bot':'user'}
      />
      </div>
      <div className="message" id=${uniqueID}>
      ${value}
      </div>
      </div>
        </div>
      `
    )
}

//trigget to denerate ai response
const handleSubmit=async(e)=>{
  e.preventDefault();
  const form=document.querySelector('#chat-form');
  const chatContainer=document.querySelector('#chat_container');
  // console.log(form);
   const data=new FormData(form);

  //user chat stripe
  //  console.log(data.get('prompt'));
  chatContainer.innerHTML+=chatStripe(false,data.get('prompt'));

  form.reset();

  const uniqueId=generateUniqueID();
  console.log(uniqueId);
  chatContainer.innerHTML+=chatStripe(true," ",uniqueId);

  chatContainer.scrollTop=chatContainer.scrollHeight;
  const messageDiv=document.getElementById(uniqueId);
  // console.log(messageDiv);
  loader(messageDiv);

  //fetch data from the server
  console.log("promt is - ", data.get('prompt'))
  const response=await fetch('http://localhost:3022',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      prompt:data.get('prompt')
    })
  })

  clearInterval(loadInterval);
  messageDiv.innerHTML='';

  if(response.ok){
    const data=await response.json();
    const parsedData=data.bot.trim();
    console.log({parsedData});
    typeText(messageDiv,parsedData);
  }
  else{
    const err=await response.text();
    messageDiv.innerHTML="Something went wrong";
    alert(err);
  }
}


// if(form)
// form.addEventListener('submit',handleSubmit)
// if(form)
// form.addEventListener('keyup',(e)=>{
//   if(e.keyCode===13){
//     handleSubmit(e);
//   }
// })

  return (<>
  <h2 className='header'>Chat GPT</h2>
  <Link to='/sentiment' className='sentiment'>
        <button className="button n-button">
            Sentiment Analysis
        </button>
        </Link>
    <div id="app">
        <div id="chat_container">
        </div>
        <form id='chat-form'>
            <textarea name="prompt" rows="1" cols="1" placeholder='Ask for post content..'/>
            <button type="button" onClick={handleSubmit}><img src={send} alt="send" /></button>
        </form>
        
    </div>
    </>
  )
}

export default Chatgpt
