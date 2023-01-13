import { TwitchPlayer } from 'react-twitch-embed';

const TwitchView = ({ isMuted }) => (
	<TwitchPlayer
		channel='petepittawat'
		width='100%'
		height='100%'
		muted={isMuted}
		hideControls={true}
		parent={['localhost']}
	/>
);

export default TwitchView;
