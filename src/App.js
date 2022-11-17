import twitch_view from './Twitch_view.png';
import './App.css';

function App() {
  return (
    <div className="App">
		  <div className="View-twitch">
		    <img src={twitch_view} className="Pac-man-on-twitch"/>
		  </div>
		  
		  <div className="Control-panel">
		    <div className="Instruction" />
		    <div className="Audio-settings" />
		    <div className="Action-log" />
		    <div className="Record" />
		  </div>
    </div>
  );
}

export default App;
