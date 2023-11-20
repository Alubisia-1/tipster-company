import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div>
      <div className='hero-container'>
        <h1>The best platform that offers football predictions and Tips</h1>
        <p>Welcome to tipster company, your number one choice for accurate soccer predictions with over one hundred leagues to choose from. We offer well-analyzed soccer game tips to all our customers.</p>
        <p>Enjoy Tipstar services</p>
        <p>Make maximum PROFITS from our sure "2 to 5 " daily Football Predictions.</p>
         <p>Enjoy up to 95% winning with our premium plan...</p>
      </div>
      <div className='another-div'>
      <p>Odds:Our odds are represented in decimal format ( European). It determines outcome of your stake on a particular bet.</p>
      <p>1X2 Tip : 1,X,2 are the most common bets. where ‘1' represent Home team, ‘X’ Represent draw, and ‘2’ represents the Away teams. ‘1X means a bet on Home team or Draw , ‘X2 means a bet on Away team or Draw and ‘12’ on a bet means Home team or Away team to win a bet</p>
      <p>Prob: (High, Norm, Low ) This words for every tips indicate the confidence level of the tip. High on Manchester city means that Manchester city will most likely win the match</p>
      <p>GG/NG Tip : ‘GG’ is a short abbreviation of “Goal Goal” both the Home teams and Away teams to score in the match while NG “ No Goal” mean either or both of the teams will not score in the match.</p>
      <p>CS TIPS: This is a prediction on the possible fulltime scores</p>

      <p className='invite-link'>Create an account now to access unlimitted betting tips to maximise your profits</p>
      </div>
    </div>
  );
}

export default HeroSection;
