import './App.css';

import React, { Component }  from 'react';

import TwitchView from "./TwitchView";
import VoiceComponent from "./VoiceComponent";

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
			      <div className="Instruction-1">The game will be automatically played by AI. By cheer/jeer with your own voice, you can give advantages/disadvantages to Ms PAC-MAN</div>
			      <div className="Instruction-space" />
			      <div className="Instruction-2">Press the <b>"Record"</b> button and cheer/jeer with your passionate voice!</div>
			    </div>
			    <div className="Audio-settings">
			      <div className="Audio-space" />
			      <div className="Audio-title"><b>Audio settings</b></div>
			      <div className="Audio-items">
			        <div className="toggle_button">
  	            <input id="toggle" className="toggle_input" type='checkbox' onChange={this.handleChange}/>
  	            <label htmlFor="toggle" className="toggle_label"/>
  	          </div>
			        <div className="Audio-1">Turn on/off background music</div>
			      </div>
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
