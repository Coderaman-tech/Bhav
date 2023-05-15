import React from 'react';
import './Intro.css';
import Lottie from "lottie-react";
import Post from '../../media/animations/social-media-influencer.json';
import twitter from '../../media/images/twitter.png';
import instagram from '../../media/images/instagram.png';
import linkedin from '../../media/images/linkedin.png';
import fb from '../../media/images/fb.png';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <>
    <div className='intro'>       
        <div className="i-left">
            <div className="i-name">
                <span>Bhav</span>
                <span>
                Welcome to Bhav - your ultimate social media content assistant. Our cutting-edge sentiment analysis technology provides personalized content recommendations for Twitter, Facebook, LinkedIn, and other platforms. Whether you're a social media influencer, marketer, or business owner, Bhav helps you create engaging content that resonates with your audience.
                </span>
            </div>
            <Link to='/login'>
            <button className='button i-button'>
                Try it
            </button>
            </Link>
            
        </div>

        <div className="i-right">
        <Lottie style={{height:600}} animationData={Post} />
        </div>
        <div className="uses-platform">

        <div className="term1">Help for platform</div>
     
     <div className="use-case">
     <img src={twitter} alt="" width={87} height={90}/>
     <img src={linkedin} alt="" width={87} height={90}/>
     <img src={fb} alt="" width={87} height={90}/>
     <img src={instagram} alt="" width={87} height={90}/>
 </div>
    </div>
        </div>

   
 </>
  )
}

export default Intro
