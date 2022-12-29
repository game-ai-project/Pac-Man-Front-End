import React, { Component } from "react";
import './App.css';


class VoiceComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      supported: true,
      lang: props.lang || "en-US",
      autoPlay: false,
      isListening: false
    };
  }

  componentWillMount() {
		const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this._recognizer = new Recognition();

		console.log(this._recognizer);
  }

  componentDidMount() {
    if (this.state.supported && this.state.autoPlay) {
      // this.recognise();
    }
  }

	recognise = () => {
    this.setState({ isListening: true });

		this._recognizer.lang = this.state.lang;
		if (this.state.isListening == false) {
			this._recognizer.start();
		}

    this.setState({ isListening: false });
	}

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

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
