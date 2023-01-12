import './App.css';

import React, { Component } from 'react';

class VoiceComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lang: props.lang || 'en-US',
			isListening: false,
		};
	}

	componentWillMount() {
		const Recognition =
			window.SpeechRecognition || window.webkitSpeechRecognition;

		this._recognizer = new Recognition();

		this._recognizer.onend = (event) => {
			this.setState({ isListening: false });
		};

		this._recognizer.onresult = (event) => {
			const text = event.results[0][0].transcript;
			console.log(text);

			fetch('http://20.194.195.200:8000/sentiment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					message: text,
				}),
			})
				.then((res) => {
					//TODO: Do something with this result, for example, let user know that they send the voice successfully to the server
					console.log(res.json());
				})
				.catch((err) => {
					//TODO: In case some error happens, let the user know!
				});
		};
	}

	recognise = () => {
		if (this.state.isListening == false) {
			this.setState({ isListening: true });
			this._recognizer.lang = this.state.lang;
			this._recognizer.start();
		}
	};

	render() {
		const { isListening } = this.state;
		return (
			<div>
				<br />
				<button
					disabled={isListening}
					onClick={this.recognise}
					className='rounded-corner'
				>
					{isListening ? "Listening..." : "Record"}
				</button>
			</div>
		);
	}
}

export default VoiceComponent;
