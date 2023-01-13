import './App.css';

import { useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ENDPOINT_URL = 'https://20.194.195.200:8000/sentiment';
const MySwal = withReactContent(Swal);

const VoiceButton = ({ lang = 'en-US' }) => {
	const [isListening, setIsListening] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);

	const [recognizer] = useState(
		(window.SpeechRecognition && new window.SpeechRecognition()) ||
			(window.webkitSpeechRecognition && new window.webkitSpeechRecognition())
	);

	useEffect(() => {
		recognizer.onend = () => {
			setIsListening(false);
		};

		recognizer.onresult = async (event) => {
			const text = event.results[0][0].transcript;
			console.log(`Recognized text: ${text}`);

			setIsProcessing(true);
			try {
				const response = await fetch(ENDPOINT_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						message: text,
					}),
				});
				const data = await response.json();
				MySwal.fire({
					title: <p>Your message was successfully recorded</p>,
					icon: 'success',
					html: `<p>Text: "${text}"</p>`,
				});
				console.log(data);
			} catch (err) {
				MySwal.fire({
					title: <p>Something went wrong. Please try again later.</p>,
					icon: 'error',
					html: `<p>Text: "${text}"</p>`,
				});
				console.log(err);
			} finally {
				setIsProcessing(false);
			}
		};
	}, [recognizer]);

	const onRecognize = () => {
		if (isListening === false) {
			setIsListening(true);
			recognizer.lang = lang;
			recognizer.start();
		}
	};

	return (
		<div>
			<button
				disabled={isListening || isProcessing}
				onClick={onRecognize}
				className={
					isListening || isProcessing
						? 'record-button disabled'
						: 'record-button'
				}
			>
				{isListening
					? 'Listening...'
					: isProcessing
					? 'Processing...'
					: 'Record'}
			</button>
		</div>
	);
};
export default VoiceButton;
