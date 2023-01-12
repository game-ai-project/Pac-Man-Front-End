import React, { Component }  from 'react';
import VoiceComponent from "./VoiceComponent";
import TwitchView from "./TwitchView";
import './App.css';


// function App() {
class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
			muted: true
    };

  }

	handleChange = (event) => {
		if (this.state.muted == false) {
			this.setState({muted: true})
		} else {
			this.setState({muted: false})
		}

	}


	render() {
		const { muted } = this.state;

  	return (
  	  <div className="App">
			  <div className="Twitch-view">
			    <TwitchView muted={this.state.muted}/>
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
  	            <input id="toggle" class="toggle_input" type='checkbox' onChange={this.handleChange}/>
  	            <label for="toggle" class="toggle_label"/>
  	          </div>
			        <div className="Audio-1">Turn on/off background music</div>
			      </div>
			    </div>
			    <div className="Action-log">
			      <div className="Action-log-space" />
			      <div className="Action-log-title"><b>Action log</b></div>
			      <ul>
  	          <li></li>
  	        </ul>
			    </div>
			    <div className="Record">
			      <VoiceComponent />
			    </div>
			  </div>
  	  </div>
		)
	};
}

export default App;
