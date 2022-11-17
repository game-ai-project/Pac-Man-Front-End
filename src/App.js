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
		      <p>Instruction</p>
		    </div>
		    <div className="Audio-settings" />
		    <div className="Action-log" />
		    <div className="Record" />
		  </div>
    </div>
  );
}

export default App;
