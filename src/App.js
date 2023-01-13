import './App.css';

import TwitchView from './TwitchView';
import VoiceButton from './VoiceComponent';
import { useState } from 'react';

const App = () => {
	const [isMuted] = useState(true);

	return (
		<div className='App'>
			<div className='Twitch-view'>
				<TwitchView isMuted={isMuted} />
			</div>

			<div className='User-interface'>
				<div className='Instruction'>
					<div className='Instruction-space' />
					<div className='Instruction-title'>
						<b>Instruction</b>
					</div>
					<p>
						The game will be automatically played by AI. By cheer/jeer with your
						own voice, you can give advantages/disadvantages to Ms PAC-MAN
					</p>
					<p>
						Press the <b>"Record"</b> button and cheer/jeer with your passionate
						voice!
					</p>
				</div>
				<div className='Record'>
					<VoiceButton />
				</div>
			</div>
		</div>
	);
};

export default App;
