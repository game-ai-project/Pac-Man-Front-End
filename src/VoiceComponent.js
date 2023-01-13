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
				})
				.then(data => {
					alert(`Your message "${text}" was successfully records.`)
					console.log(data)
				})
				.catch((err) => {
					alert('Something went wrong. Please try again later.')
					consoloe.log(err)
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
