import React, { Component } from "react";
import io, { Socket } from 'socket.io-client';
import './App.css';


class VoiceComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lang: props.lang || "en-US",
      isListening: false
    };
  }

  componentWillMount() {
		const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		const socket = io("wss://28fe-133-19-43-10.jp.ngrok.io", { transports: ['websocket', 'polling', 'flashsocket'] });

    this._recognizer = new Recognition();

		this._recognizer.onend = (event) => {
			this.setState({isListening: false})
		}

		this._recognizer.onresult = (event) => {
    	console.log(event.results[0][0].transcript);

			socket.emit("post", {message: event.results[0][0].transcript})
  	}

		console.log(this._recognizer);
  }

	recognise = () => {

		if (this.state.isListening == false) {
			this.setState({isListening: true})
		  this._recognizer.lang = this.state.lang;
			this._recognizer.start();
		}
	}


  render() {
    const { isListening } = this.state;
    return (
      <div>
        <br />
        <button disabled={isListening} onClick={this.recognise} className="rounded-corner">
          Record
        </button>
      </div>
    );
  }
}

export default VoiceComponent;
