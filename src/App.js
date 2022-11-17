import React, { Component }  from 'react';
import twitch_view from './Twitch_view.png';
import './App.css';

function App() {
  return (
    <div className="App">
		  <div className="Twitch-view">
		    <img src={twitch_view} className="Pac-Man" />
		  </div>
		  
		  <div className="User-interface">
		    <div className="Instruction">
		      <div className="Instruction-space" />
		      <div className="Instruction-title"><b>Instruction</b></div>
		      <div className="Instruction-1">The game will be automatically played by Al.By cheering/boo with your own voice, you can give advantages/disadvantages to Ms PAC-MAN</div>
		      <div className="Instruction-space" />
		      <div className="Instruction-2">Press the <b>"Record"</b> button and cheer/ooo with your passionate voicel</div>
		    </div>
		    <div className="Audio-settings">
		      <div className="Audio-space" />
		      <div className="Audio-title"><b>Audio settings</b></div>
		      <div className="Audio-items">
		        <div className="toggle_button">
              <input id="toggle" class="toggle_input" type='checkbox' />
              <label for="toggle" class="toggle_label"/>
            </div>
		        <div className="Audio-1">Turn on/off background music</div>
		      </div>
		      <div className="Audio-volume">Volume</div>
		    </div>
		    <div className="Action-log" />
		    <div className="Record" />
		  </div>
    </div>
  );
}

export default App;
