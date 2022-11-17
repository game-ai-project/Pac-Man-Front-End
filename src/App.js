import twitch_view from './Twitch_view.png';
import './App.css';

function App() {
  return (
    <div className="App">
		  <div className="Twitch-view">
		    <img src={twitch_view} className="Pac-Man" />
		  </div>
		  
		  <div className="User-interface">
		    <div className="Instruction">
		      <div className="Instruction-title">Instruction</div>
		      <div className="Instruction-content">The game will be automatically played by Al.
By cheering/boo with your own voice, you can give advantages/disadvantages to Ms PAC-MAN
Press the "Record" button and cheer/ooo with your passionate voicel</div>
		    </div>
		    <div className="Audio-settings" />
		    <div className="Action-log" />
		    <div className="Record" />
		  </div>
    </div>
  );
}

export default App;
