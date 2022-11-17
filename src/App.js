import twitch_view from './Twitch_view.png';
import './App.css';

function App() {
  return (
    <div className="App">
		  <div className="View-Twitch">
		    <img src={twitch_view} className="Pac-Man-on-Twitch" alt="temporaly" />
		  </div>
		  
		  <div className="Instruction" />
		  <div className="Audio-settings" />
		  <div className="Action-log" />
		  <div className="Record" />
    </div>
  );
}

export default App;
