import React from 'react';
import { Tilt } from 'react-tilt';
import brain from './brain.png';

function Logo() {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            50,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return (
    <div className='mx-8 mt-0'>
      <Tilt className='shadow-2xl rounded-md bg-gradient-to-r from-pink-400 to-sky-300' options={defaultOptions} style={{ height: 140, width: 140 }}>
         <div>
          <img src={brain} className='pt-5 pl-5' alt="logo" />
         </div>
      </Tilt>
    </div>
  )
}

export default Logo