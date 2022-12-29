import React, { Component }  from 'react';
import { TwitchStream } from 'react-twitch-stream';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

function send_message() {
	SpeechRecognition.startListening();

}

function App() {
	const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
		  <div className="Twitch-view">
				<iframe
			    src="https://player.twitch.tv/?channel=dep_ow&parent=game-ai-project.github.io&muted=true"
			    height="720"
			    width="720"
			    allowfullscreen>
				</iframe>
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
		      <div className="Volume-slider">
		        <div>0</div>
         	  <input type="range" name="speed" min="0" max="100"/>
		        <div>100</div>
		      </div>
		    </div>
		    <div className="Action-log">
		      <div className="Action-log-space" />
		      <div className="Action-log-title"><b>Action log</b></div>
		      <ul>
            <li>18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!</li>
            <li>18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!</li>
            <li>18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!</li>
          </ul>
		    </div>
		    <div className="Record">
          <button class="rounded-corner" onClick={send_message}>Record</button>
		    </div>
		  </div>
    </div>
  );
}

export default App;
